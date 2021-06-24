import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { TokenPayload } from '../@types/token.payload';

export default async function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) return response.sendStatus(401);

  const [_type, token] = request.headers.authorization.split(' ');

  try {
    const payload = verify(token, process.env.JWT_SECRET_KEY, {
      algorithms: ['RS256'],
    }) as TokenPayload;

    console.log(payload);

    request.userId = payload.id;
    request.userName = payload.name;
    request.userEmail = payload.email;
    request.userIsAdm = payload.isAdm;

    return next();
  } catch (error) {
    return response.sendStatus(401);
  }

  return response.sendStatus(200);
}
