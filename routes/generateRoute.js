import { Router } from 'express';

import generateController from '../controllers/generateController'

const routes = Router();

routes.post('/generate', generateController.generate);

routes.get('/', (req, res) => {
  res.render(__dirname + '/../public/dist/index.html');
})

export default routes;