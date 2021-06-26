import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../repositories/UsersRepositories';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const user = await usersRepositories.findOne(id);

  if (!user) {
    return response.status(400).json({ error: 'User does not exists' });
  }

  if (!user.admin) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  return next();
}
