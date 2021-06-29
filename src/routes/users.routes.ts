import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { ListUserReceiveComplimentsController } from '../modules/users/useCases/listUserReceiveCompliments/ListUserReceiveComplimentsController';
import { ListUsersController } from '../modules/users/useCases/listUsers/ListUsersController';
import { ListUserSendComplimentsController } from '../modules/users/useCases/listUserSendCompliments/ListUserSendComplimentsController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', ensureAuthenticated, listUsersController.handle);

usersRoutes.get(
  '/compliments/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle,
);

usersRoutes.get(
  '/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle,
);

export { usersRoutes };
