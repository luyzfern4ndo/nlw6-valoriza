import { Request, Response } from 'express';

import { ListUserReceiveComplimentsUseCase } from './ListUserReceiveComplimentsUseCase';

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserReceiveComplimentsUseCase =
      new ListUserReceiveComplimentsUseCase();

    const compliments = await listUserReceiveComplimentsUseCase.execute(id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
