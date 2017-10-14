import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: {global: 'Invalid credentials'} });
});

app.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.send('Express API server')
});

app.listen(process.env.API_PORT, () => 
  console.log('API listening on', process.env.API_PORT)
);