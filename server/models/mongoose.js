const mongoose = require('mongoose')
const enviroment = require('../environment/environment');
mongoose.connect(enviroment.enviroment.db, () => console.log('connected to mongoDB'))

module.exports = mongoose
