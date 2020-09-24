// apiRoutes/puppies.js
const router = require("express").Router();

// matches GET requests to /api/recipes/
router.get("/", function (req, res, next) {
  res.send("All Recipes GET Route");
});

router.post("/", function (req, res, next) {
  res.send("All Recipes POST Route");
});

router.get("/:recipe-slug", function (req, res, next) {
  res.send("One Recipe GET route");
});

router.put("/:recipe-slug", function (req, res, next) {
  res.send("One Recipe PUT route");
});

router.delete("/:recipe-slug", function (req, res, next) {
  res.send("One Recipe DELETE route");
});

module.exports = router;
