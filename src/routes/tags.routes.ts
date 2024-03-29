import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateTagController } from '../modules/users/useCases/createTag/CreateTagController';
import { ListTagsController } from '../modules/users/useCases/listTags/ListTagsController';

const tagsRoutes = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

tagsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
);
tagsRoutes.get('/', ensureAuthenticated, listTagsController.handle);

export { tagsRoutes };
