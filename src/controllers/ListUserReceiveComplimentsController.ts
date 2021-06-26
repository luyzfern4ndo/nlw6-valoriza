import { Request, Response } from 'express';

import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
