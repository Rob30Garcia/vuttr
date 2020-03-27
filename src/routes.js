import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import ToolController from './app/controller/ToolController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users', UserController.index);
routes.post('/users/:user_id/tools', ToolController.store);
routes.get('/users/:user_id/tools', ToolController.index);
routes.delete('/users/:user_id/tools/:id', ToolController.delete);
routes.get('/tools', ToolController.show);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
