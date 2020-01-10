'use strict';

const router = require("express").Router();
const smsRoute = require('./sms');
const gsigninRouter = require('./gsigninRouter');
const omdbRouter = require("./omdbRouter");
const holidayRouter = require('./holidayRouter')

router.use("/", smsRoute);
router.use('/gsignin', gsigninRouter);
router.use("/omdbs", omdbRouter);
router.use("/holiday", holidayRouter);

module.exports = router;