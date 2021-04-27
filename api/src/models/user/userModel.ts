import mongoose from 'mongoose';
const uuid = require('uuid');

const UserSchema = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      externalId: { type: String, default: uuid.v4 },
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { versionKey: false }
  )
);

export default UserSchema;
