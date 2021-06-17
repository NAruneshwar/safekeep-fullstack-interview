const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { Pool, Client } = require('pg')
const request = require("supertest");

// const path = require('path');
// const session = require('express-session');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const homeRouter = require('./routes/home');


app.use('/', homeRouter);
// app.use('/order', ordersRouter);


app.listen(PORT, function () {
  console.log(`Server is running on port: ${(PORT)}`);
  if (process && process.send) {
    process.send({done: true});
  }
});