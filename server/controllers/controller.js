'use strict'

const models = require('../models/schemas.js')
const { postOne, trackOne } = require('../models/Tracking.js')

exports.Track = async (req, res) => {
  try {
    const user = await models.findOne({ email: req.body.email, password: req.body.password })
    if (user != null) {
      let tracking = false
      for (let i = 0; i < user.shippments.length; i++) {
        if (user.shippments[i].includes(req.body.carrier) === true && user.shippments[i].includes(req.body.code) === true) {
          tracking = true
        }
      }
      if (tracking) {
        res.status(201)
        res.send({ status: 'already tracking' })
      } else {
        const data = await postOne(req.body.carrier, req.body.code)
        await models.findOneAndUpdate({ email: req.body.email, password: req.body.password }, { $push: { shippments: [req.body.carrier, req.body.code] } })
        res.status(201)
        res.send({ status: 'done', data })
      }
    } else {
      console.log(232232)
      res.status(201)
      res.send({ status: 'not found' })
    }
  } catch (e) {
    console.log('error')
    console.log('e', e)
    res.sendStatus(400)
  }
}

exports.getTracking = async (req, res) => {
  try {
    const user = await models.findOne({ email: req.body.email, password: req.body.password })
    if (user) {
      const data = []
      for (let i = 0; i < user.shippments.length; i++) {
        const item = await trackOne(user.shippments[i][0], user.shippments[i][1])
        data.push(item)
      }
      res.status(201)
      res.send({ status: 'done', data })
    } else {
      res.status(201)
      res.send({ status: 'user not found' })
    }
  } catch (e) {
    console.log('e', e)
    res.sendStatus(400)
  }
}

exports.user = async (req, res) => {
  try {
    const exists = await models.findOne({ email: req.body.email })
    if (exists) {
      res.status(201)
      res.send({ status: 'already exists' })
    } else {
      const user = {
        email: req.body.email,
        password: req.body.password,
        fn: req.body.fn,
        ln: req.body.ln,
        shippments: []
      }
      await models.create(user)
      res.status(201)
      res.send({ status: 'created' })
    }
  } catch (e) {
    console.log('e', e)
    res.sendStatus(400)
  }
}

exports.logIn = async (req, res) => {
  const exists = await models.findOne({ email: req.body.email })
  if (exists) {
    res.status(201)
    res.send({ status: 'log in', email: req.body.email, password: req.body.password })
  } else {
    res.status(201)
    res.send({ status: 'invalid' })
  }
}
