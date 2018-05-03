const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
//calling express like af function here creates a new seperate express app and we can have multiple express instances in an application

mongoose.connect('keys.mongoURI');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); //This is express telling node to listen to port 5000
