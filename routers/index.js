const router = require("express").Router();
const holidayRouter = require('./holidayRouter')

router.use("/holiday", holidayRouter);

module.exports = router;