const axios = require('axios')

class HolidayController {
  static getHoliday(req, res, next) {
    axios({
      method: 'get',
      url: `https://calendarific.com/api/v2/holidays?&api_key=${process.env.CALENDARIFIC_API_KEY}&country=id&year=2020`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json' 
      }
    })
    .then(({data}) => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = HolidayController