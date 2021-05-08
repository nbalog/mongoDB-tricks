const express = require("express");
const ComparisonController = require("../controllers/comparison");
const router = express.Router();

router.get("/getComparisonEq/", ComparisonController.eq);
router.get("/getComparisonGt/", ComparisonController.gt);
router.get("/getComparisonGte/", ComparisonController.gte);
router.get("/getComparisonLt/", ComparisonController.lt);
router.get("/getComparisonLte/", ComparisonController.lte);
router.get("/getComparisonIn/", ComparisonController.in);
router.get("/getComparisonNin/", ComparisonController.nin);
router.get("/getComparisonNe/", ComparisonController.ne);
module.exports = router;
