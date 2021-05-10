const express = require("express");
const EvaluationController = require("../controllers/evaluation");
const router = express.Router();

router.get("/getEvaluationJsonSchema/", EvaluationController.jsonSchema);

module.exports = router;
