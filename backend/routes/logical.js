const express = require("express");
const LogicalController = require("../controllers/logical");
const router = express.Router();

router.get("/getLogicalAnd/", LogicalController.and);
router.get("/getLogicalOr/", LogicalController.or);
router.get("/getLogicalNor/", LogicalController.nor);
router.get("/getLogicalNot/", LogicalController.not);

module.exports = router;
