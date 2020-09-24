const router = require("express").Router();

//main route for recipes
router.use("/recipes", require("./recipes"));

// //for security??
// router.use("/users", require("./users"));

// // bios maybe
// router.use("/biographies", require("./biogrphies"));

module.exports = router;
