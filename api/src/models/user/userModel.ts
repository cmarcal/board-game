import mongoose from 'mongoose';
const uuid = require('uuid');

const UserSchema = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      _id: { type: String, default: uuid.v4 },
      firstName: String,
      lastName: String,
      email: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { versionKey: false }
  )
);

export default UserSchema;
