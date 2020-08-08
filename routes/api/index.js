const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googleAPI");

// Book routes
router.use("/books", bookRoutes);
router.use("/googleBooks", googleRoutes);

module.exports = router;
