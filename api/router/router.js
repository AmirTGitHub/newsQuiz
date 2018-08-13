const express = require("express");
const router = express.Router();
const dbController = require('../controllers/dbController')


router.get('/hello', dbController.homepage)


module.exports = router
