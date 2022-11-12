'use strict';

const router = require('express').Router();
const controllers = require('./controllers/controller');

router.post('/track', controllers.Track);
router.post('/getTracking', controllers.getTracking);
router.post('/user', controllers.user);
router.post('/login', controllers.logIn);

module.exports = router;
