import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IRequest): Promise<string> {
    if (!email || !password) {
      throw new AppError('Email or password incorrect');
    }

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    // Gerando token
    // Secret Key md5: nlw6#valoriza
    const token = sign(
      {
        email: user.email,
      },
      'cc6219c8697446a0d369bb76ff1dace0',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}

export { AuthenticateUserService };
