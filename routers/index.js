'use strict';

const router = require("express").Router();
const gsigninRouter = require('./gsigninRouter');
const omdbRouter = require("./omdbRouter");
const holidayRouter = require('./holidayRouter')

router.use('/gsignin', gsigninRouter);
router.use("/omdbs", omdbRouter);
router.use("/holiday", holidayRouter);

module.exports = router;