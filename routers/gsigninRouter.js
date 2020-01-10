'use strict';

const gsigninController = require('../controllers/gsigninController');
const router = require('express').Router();

router.post('/', gsigninController.signin);

module.exports = router;