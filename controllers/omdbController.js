const axios = require("axios");

class omdbController {
    static getMovieTitle(req, res, next) {
        axios({
            method: 'get',
            url: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.params.title}`,
            headers: {
                'X-RapidAPI-Host': 'movie-database-imdb-alternative.p.rapidapi.com',
                'X-RapidAPI-Key': '11924a55bbmshd7bf0fb52ffcb41p1c3effjsnec52571df969'
            }
        }).then(response => {
            res.status(200).json(response.data)
        }).catch(err => {
            res.json(err.message)
        })
    }
}

module.exports = omdbController;