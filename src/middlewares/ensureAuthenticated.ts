import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Receber o token
  const authHeader = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authHeader) {
    return response.status(401).end();
  }

  const [, token] = authHeader.split(' ');

  try {
    // Validar se o token é valido
    const { sub: user_id } = verify(
      token,
      'cc6219c8697446a0d369bb76ff1dace0',
    ) as IPayload;

    // Recuperar informações do usuário
    request.user = {
      id: user_id,
    };

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
