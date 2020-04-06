import { Router } from 'express';

import generateController from '../controllers/generateController'

const routes = Router();

routes.post('/generate', generateController.generate);

export default routes;