const mongoose = require('mongoose')
const enviroment = require('../environment/environment.env');
mongoose.connect(enviroment.enviroment.db, () => console.log('connected to mongoDB'))

module.exports = mongoose
