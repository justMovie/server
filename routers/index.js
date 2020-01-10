const router = require("express").Router();
const smsRoute = require('./sms');

router.use("/", smsRoute);

module.exports = router;