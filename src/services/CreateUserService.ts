import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new AppError('Email incorrect');
    }

    if (!password) {
      throw new AppError('Password is missing');
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
