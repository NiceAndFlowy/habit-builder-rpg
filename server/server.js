import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import auth from './routes/auth';
import users from './routes/users';

dotenv.config();
const app = express();
app.use(bodyParser.json());

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true })

// Routes
app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.send('Express API server')
});

app.listen(process.env.API_PORT, () =>
  console.log('API listening on', process.env.API_PORT)
);
