import { compare, compareSync } from 'bcrypt';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export default {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      select: ['id', 'name', 'email', 'password'],
      where: { email },
    });

    if (!user)
      return response.send({ errors: { email: 'email não cadastrado' } });

    if (!compareSync(password, user.password)) {
      return response.send({ errors: { password: 'Senha inválida' } });
    }

    delete user.password;

    console.log(process.env.JWT_SECRET_KEY);

    const token = sign(
      { id: user.id, name: user.name, email: user.email, isAdm: user.isAdm },

      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1d',
        algorithm: 'RS256',
      }
    );

    return response.send({ user, token });
  },
};
