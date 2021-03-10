import {
  getProfiles,
  getProfile,
  createProfile,
  deleteProfile,
} from '../../controllers/user/userController';

const routes = app => {
  app.use((_req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/profiles', getProfiles);
  app.get('/profile', getProfile);
  app.post('/profile/create', createProfile);
  app.delete('/profile/delete', deleteProfile);
};

export default routes;
