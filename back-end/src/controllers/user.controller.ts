import { hashSync } from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { findConfigFile } from 'typescript';
import { User } from '../entities/User';

export default {
  async create(request: Request, response: Response) {
    const { name, email, password, profilePicture } = request.body;
    const userRepository = getRepository(User);
    const userWithEmail = await userRepository.findOne({ email });

    if (userWithEmail)
      return response.send({ errors: { email: 'emmail already exists' } });

    const user = userRepository.create({
      name,
      email,
      password,
      profilePicture,
    });
    console.log(user);
    await userRepository.save(user);
    delete user.password;
    return response.send(user);
  },

  async read(request: Request, response: Response) {
    const userRepository = getRepository(User);

    let user;

    if (request.userId) {
      user = await userRepository.findOne({ id: request.userId });
    } else return response.sendStatus(400);
    if (user) return response.send(user);
    return response.sendStatus(204);
  },

  async update(request: Request, response: Response) {
    const { ...data } = request.body;
    const userRepository = getRepository(User);

    if (data.email) {
      const userWithEmail = await userRepository.findOne({ email: data.email });
      if (userWithEmail)
        return response.send({ errors: { email: 'Email already in use' } });
    }

    if (data.password) data.password = hashSync(data.password, 12);

    const result = await userRepository.update({ id: request.userId }, data);

    if (result.affected) return response.sendStatus(200);
    return response.sendStatus(400);
  },

  async delete(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ id: request.userId });

    if (!user) {
      return response.send({
        error: `Nenhum usuario com id ${request.userId}`,
      });
    }

    user.deletedAt = new Date();
    userRepository.save(user);
    return response.send({ message: 'Usuário deletado com sucesso' });
  },
};
