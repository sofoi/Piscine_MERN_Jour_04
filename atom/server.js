console.log("Ready to operate");

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://localhost:27017/user";


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
// api routes

app.get('/', function(req, res) {
    res.sendFile((__dirname, '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.use('/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/users', require('/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/users/users.controller.js'));

// global error handler


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4242;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});