const express = require("express");
const ComparisonController = require("../controllers/comparison");
const router = express.Router();

router.get("/getComparisonEq/", ComparisonController.eq);
router.get("/getComparisonGt/", ComparisonController.gt);
router.get("/getComparisonGte/", ComparisonController.gte);
router.get("/getComparisonLt/", ComparisonController.lt);
router.get("/getComparisonLte/", ComparisonController.lte);
module.exports = router;
