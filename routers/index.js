'use strict';

const router = require("express").Router();
const gsigninRouter = require('./gsigninRouter');

router.use('/gsignin', gsigninRouter);

module.exports = router;