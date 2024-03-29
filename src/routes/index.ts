import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { complimentsRoutes } from './compliments.routes';
import { tagsRoutes } from './tags.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/sessions', authenticateRoutes);
router.use('/users', usersRoutes);
router.use('/tags', tagsRoutes);
router.use('/compliments', complimentsRoutes);

export { router };
