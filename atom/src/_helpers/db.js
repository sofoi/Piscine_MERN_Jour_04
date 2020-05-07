const config = require('config.json');
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const connectionString =  "mongodb://localhost:27017/User" 
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect( connectionString|| process.env.MONGODB_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/users/user.model.js')
};