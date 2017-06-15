import mongoose from 'mongoose';

const userLoginSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model('UserLogin', userLoginSchema);
