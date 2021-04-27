import express, { Request, Response } from 'express';
import userRoutes from './user/userRoutes';
import authRoutes from './auth/authRoutes';

const routes = express.Router();

routes.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to Board Game application' });
});

userRoutes(routes);
authRoutes(routes);

export default routes;
