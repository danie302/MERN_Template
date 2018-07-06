// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors')

// Initialize
const Routes = require('./src/Routes');
const app = express();
const config = require('./src/Config/database');
const port = 8000;

// DB Connection
const db = mongoose.connect(config.database)
mongoose.connection.on('connected', () => {
  console.log('Connected to the database '+config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to the database '+err);
});

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

require('./src/Config/passport')(passport);

// Routing
app.use('/API', Routes);
app.use(express.static(path.join(__dirname, 'Public')));

app.listen(port, () => {
  console.log("Server on port "+ port);
});
