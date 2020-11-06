import { Router } from 'express';

import UserController from './app/controllers/UserController'
import RepositoryController from './app/controllers/RepositoryController'
import LinkController from './app/controllers/LinkController'
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


//LINK ROUTES
routes.get('/repository', RepositoryController.index)
routes.post('/repository', RepositoryController.store)
routes.put('/repository', RepositoryController.update)
routes.delete('/repository', RepositoryController.delete)

routes.get('/link', LinkController.index)
routes.post('/link', LinkController.store)
routes.put('/link', LinkController.update)
routes.delete('/link', LinkController.delete)

export default routes;
