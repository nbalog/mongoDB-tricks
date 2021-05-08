const express = require("express");
const ComparisonController = require("../controllers/comparison");
const router = express.Router();

router.get("/getComparisonEq/", ComparisonController.eq);
router.get("/getComparisonGt/", ComparisonController.gt);
router.get("/getComparisonGte/", ComparisonController.gte);
module.exports = router;
