const router = require("express").Router();
const omdbRouter = require("./omdbRouter");
const holidayRouter = require('./holidayRouter')

router.use("/omdbs", omdbRouter);
router.use("/holiday", holidayRouter);

module.exports = router;