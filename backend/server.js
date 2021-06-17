const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { Pool, Client } = require('pg')
// const path = require('path');
// const session = require('express-session');
require('dotenv').config();

app.use(cors());
app.use(express.json());


// const connectionString = 'postgresql://trust_our_leader:in_jeff_we_trust@localhost:5432/postgres'
// const pool = new Pool({
//   connectionString,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const client = new Client({
//   connectionString,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// const uri = 'mongodb+srv://admin:2zFG0DD5vX8gHBPp@restaurant.gftqs.mongodb.net/capstone';

// mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
// })

// const usersRouter = require('./routes/users');
// const ordersRouter = require('./routes/orders');

const homeRouter = require('./routes/home');


app.use('/', homeRouter);
// app.use('/order', ordersRouter);


// app.use(express.static('client/build/'));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, function () {
  console.log(`Server is running on port: ${(PORT)}`);
  if (process && process.send) {
    process.send({done: true});
  }
});