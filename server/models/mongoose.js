const mongoose = require('mongoose');
const conf = require('../config');

mongoose.connect("mongodb+srv://noahs:1234@cluster0.8scw7ij.mongodb.net/test", () => console.log("connected to mongoDB"));

module.exports = mongoose;
