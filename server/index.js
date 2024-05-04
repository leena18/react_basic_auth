import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
dotenv.config();
import { UserRouter } from "./routes/user.js";


const app = express();
app.use(express.json()); // for pars
// Configure CORS to allow requests from the React app's origin
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the actual origin of your React app
  credentials: true, // needed for cookies or authorization headers
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization, X-Requested-With, Accept',
};
app.use(cors(corsOptions));
app.use('/auth', UserRouter)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch(err => {
  console.error('Could not connect to MongoDB', err);
});