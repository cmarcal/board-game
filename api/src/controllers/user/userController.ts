import { Request, Response } from 'express';
import model from '../../models';
import { v4 as uuidv4 } from 'uuid';
const { User } = model;

export const getProfiles = (_req: Request, res: Response) => {
  User.find((err, users) => {
    err && res.send(err);
    if (users) res.json(users);
    else res.status(404).json('There are no users');
  });
};

export const getProfile = (req: Request, res: Response) => {
  User.findOne({ id: req.query.id }, (err, user) => {
    err && res.send(err);
    if (user) res.json(user);
    else res.status(404).json('User not found');
  });
};

export const createProfile = (req: Request, res: Response) => {
  try {
    const newUser = new User({ ...req.body, id: uuidv4() });
    newUser.save((err, user) => {
      err && res.send(err);
      res.status(200).json(user);
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteProfile = (req: Request, res: Response) => {
  User.findOneAndDelete({ id: req.query.id }, {}, err => {
    err && res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
