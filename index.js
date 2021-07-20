const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

// Error define
const createError = require('http-errors');


// Express Routing

const venueRoute = require('../booking_backend/routes/venue.route.js')

// Connecting mongoDB Database

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database successfully connected!');
},
    error => {
    console.log('Could not connect to database: ' + error)
})


// using express

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use(cors());
app.use('/api', venueRoute);

// server port definition
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
  });
  
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });










// ctrl + K + C to comment 
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

