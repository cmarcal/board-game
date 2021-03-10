import express, { Request, Response } from 'express';
import userRoutes from './user/userRoutes';

const routes = express.Router();

routes.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to Board Game application' });
});

userRoutes(routes);

export default routes;
