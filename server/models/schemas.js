const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const ListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fn: {
    type: String,
    required: true
  },
  ln: {
    type: String,
    required: true
  },
  shippments: {
    type: Array,
    required: true
  }
})

const Users = mongoose.model('users', ListSchema)

module.exports = Users
