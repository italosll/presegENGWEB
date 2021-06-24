import { Router } from 'express';
import UserControlller from '../src/controllers/user.controller';
import authMiddleware from '../src/middlewares/auth.middlewares';
import authController from '../src/controllers/auth.controller';
import roleMiddleware from './middlewares/role.middleware';

const routes = Router();

routes.post('/users', authMiddleware, roleMiddleware, UserControlller.create);
routes.get('/users', authMiddleware, UserControlller.read);
routes.put('/users', authMiddleware, UserControlller.update);
routes.delete('/users', authMiddleware, UserControlller.delete);

routes.post('/auth', authController.create);

export default routes;
