import { NextFunction, Request, Response } from 'express';

export default async function roleMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.userIsAdm) return response.sendStatus(401);
  return next();
}
