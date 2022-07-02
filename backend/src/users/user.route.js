const express = require('express')
const { getResponse, sortMiddleware } = require('../crudhandler/crudhandler.controller')
const { getAllUser } = require('./user.controller')
const router = express.Router()

router.route('/').get(sortMiddleware, getAllUser, getResponse)

module.exports = router