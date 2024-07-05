const express = require('express')

const getContoller = require('./contollers/getContoller')

const router = express.Router()

router.get('/', getContoller)


module.exports = router