const router = require("express").Router();
const omdbRouter = require("./omdbRouter");

router.use("/omdbs", omdbRouter);

module.exports = router;