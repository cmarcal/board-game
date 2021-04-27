import { Request, Response } from 'express';
import model from '../../models';
const { User } = model;

export const getProfiles = (_req: Request, res: Response) => {
  User.find((err, users) => {
    err && res.send(err);
    if (users) res.json(users);
    else res.status(404).json('There are no users');
  });
};

export const getProfile = (req: Request, res: Response) => {
  User.findOne({ externalId: req.query.externalId }, (err, user) => {
    err && res.send(err);
    if (user) res.json(user);
    else res.status(404).json('User not found');
  });
};

export const updateProfile = (req: Request, res: Response) => {
  try {
    User.findOneAndUpdate(
      { externalId: req.body.externalId },
      { ...req.body },
      {},
      (err, user) => {
        err && res.send(err);
        if (user) res.json(user);
        else res.status(404).json('User not found');
      }
    );
  } catch (e) {
    console.log(e);
  }
};

export const deleteProfile = (req: Request, res: Response) => {
  User.findOneAndDelete({ externalId: req.query.externalId }, {}, err => {
    err && res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
