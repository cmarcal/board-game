import { Router } from 'express-serve-static-core';
import {
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
} from '../../controllers/user/userController';

const routes = (app: Router) => {
  app.use((_req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/profiles', getProfiles);
  app.get('/profile', getProfile);
  app.put('/profile/update', updateProfile);
  app.delete('/profile/delete', deleteProfile);
};

export default routes;
