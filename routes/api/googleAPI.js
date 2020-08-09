const router = require("express").Router();
const googleBooksController = require("../../controllers/googleBooksController");

// Matches with "/api/books"
router.route("/:title").get(googleBooksController.findByTitle);

module.exports = router;
