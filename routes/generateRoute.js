import { Router } from 'express';

import generateController from '../controllers/generateController'

const routes = Router();

routes.post('/generate', generateController.generate);
routes.get('/download/:fileName', generateController.download);

export default routes;