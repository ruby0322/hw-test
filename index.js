const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routesHandler = require('./routes/handler');
require('dotenv/config');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', routesHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 5000;

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Node.js server is listening on ${port}.`);
});
