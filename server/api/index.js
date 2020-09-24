const router = require("express").Router();

//main route for recipes
router.use("/recipes", require("./recipes"));

// //for security??
// router.use("/users", require("./users"));

// // bios maybe
// router.use("/biographies", require("./biogrphies"));

//
router.use(function (req, res, next) {
  const err = new Error("404 Error Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
