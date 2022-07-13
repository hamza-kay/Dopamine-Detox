import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import activityRoutes from './routes/activities.js';

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

app.use('/activities', activityRoutes);

export const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
