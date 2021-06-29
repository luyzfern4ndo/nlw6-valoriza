import { Request, Response } from 'express';

import { ListUserSendComplimentsUseCase } from './ListUserSendComplimentsUseCase';

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserSendComplimentsUseCase = new ListUserSendComplimentsUseCase();

    const compliments = await listUserSendComplimentsUseCase.execute(id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };
