const router = require('express').Router()
const HolidayController = require('../controllers/HolidayController')

router.get('/', HolidayController.getHoliday)

module.exports = router