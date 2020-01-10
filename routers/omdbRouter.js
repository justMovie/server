const router = require("express").Router();
const omdbController = require("../controllers/omdbController");

router.get("/:title", omdbController.getMovieTitle);
router.get("/details/:title", omdbController.getMovieDetails);

module.exports = router;