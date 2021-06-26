import { Request, Response } from 'express';

import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsService.execute(id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };
