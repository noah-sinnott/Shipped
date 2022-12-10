'use strict'
const enviroment = require('./environment/environment.env') ;
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router.js')

const PORT = enviroment.enviroment.port
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
