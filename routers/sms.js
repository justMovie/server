const router = require("express").Router();
const SmsController = require('../controllers/sms');

router.post('/sms', SmsController.sendSms);

module.exports = router;