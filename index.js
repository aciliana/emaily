const express = require('express');
//calling express like a function here creates a new seperate express app and we can have multiple express instances in an application
const app = express();


app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT); //This is express telling node to listen to port 5000
