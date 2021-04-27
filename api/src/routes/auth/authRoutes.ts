import { Router } from 'express-serve-static-core';
import { createUser } from '../../controllers/auth/authController';

const routes = (app: Router) => {
  app.use((_req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/user/create', createUser);
};

export default routes;
