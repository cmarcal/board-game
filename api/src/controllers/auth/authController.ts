import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import model from '../../models';
import { JWTConfig } from '../../config';
const { User } = model;

export const createUser = (req: Request, res: Response) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const newUser = new User({ ...req.body, password: hashedPassword });
    newUser.save((err, user) => {
      err && res.status(500).send('Ocorreu um erro ao registrar o usuário.');
      const token = jwt.sign({ id: user._id }, JWTConfig.secret, {
        expiresIn: JWTConfig.expiresIn,
      });
      res.status(200).send({ token: token });
    });
  } catch (error) {
    console.log(error);
  }
};

// export const validationToke = (req: Request, res: Response) => {};
