import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new AppError('Email incorrect');
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
