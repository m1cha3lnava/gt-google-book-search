const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googleAPI");

// Book routes
router.use("/googleBooks", googleRoutes);
router.use("/books", bookRoutes);

module.exports = router;
