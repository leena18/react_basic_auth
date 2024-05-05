import express from 'express'
import bcrypt from 'bcrypt'
const router = express.Router();
import {User} from '../models/User.js'





router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const user = await User.findOne({ email });
  
      if (user) {
        return res.json({ message: "user already existed" });
      }
  
      // If the user doesn't exist, create a new one
      const hashpassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashpassword,
      });
  
      await newUser.save();
      return res.json({ status: true, message: "user registered successfully" });
    } catch (err) {
      console.error('Error during user registration', err);
      return res.status(500).json({ message: 'Something went wrong during registration' });
    }
  });
export {router as UserRouter};