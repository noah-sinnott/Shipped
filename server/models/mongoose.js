const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://noahs:1234@cluster0.8scw7ij.mongodb.net/test', () => console.log('connected to mongoDB'))

module.exports = mongoose
