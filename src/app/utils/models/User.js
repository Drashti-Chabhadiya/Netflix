import mongoose from 'mongoose';

const UserProvider = {
  CREDENTIALS: 'credentials',
  GOOGLE: 'google',
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: false,
  },
  token: {
    type: String,
    default: null,
  },
  name: String,
  image: String,
  provider: {
    type: String,
    enum: Object.values(UserProvider),
    default: UserProvider.CREDENTIALS,
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
