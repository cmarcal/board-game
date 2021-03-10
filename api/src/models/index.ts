import mongoose from 'mongoose';
import UserSchema from './user/userModel';
mongoose.Promise = global.Promise;

const model = { Mongoose: mongoose, User: UserSchema };

export default model;
