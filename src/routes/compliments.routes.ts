import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateComplimentController } from '../modules/users/useCases/createCompliment/CreateComplimentController';

const complimentsRoutes = Router();

const createComplimentController = new CreateComplimentController();

complimentsRoutes.post(
  '/',
  ensureAuthenticated,
  createComplimentController.handle,
);

export { complimentsRoutes };
