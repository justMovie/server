const router = require("express").Router();
const omdbController = require("../controllers/omdbController")

router.get("/:title", omdbController.getMovieTitle);

module.exports = router;