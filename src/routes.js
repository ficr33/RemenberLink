import { Router } from 'express';

import UserController from './app/controllers/UserController'
import SeassionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth'

const routes = new Router();

//USERS ROUTES
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.post('/sessions', SeassionController.store)
routes.use(authMiddleware)
routes.put('/users', UserController.update)
routes.delete('/users', UserController.delete)

export default routes;
