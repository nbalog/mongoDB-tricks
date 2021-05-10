const express = require("express");
const EvaluationController = require("../controllers/evaluation");
const router = express.Router();

router.get("/getEvaluationJsonSchema/", EvaluationController.jsonSchema);
router.get("/getEvaluationMod/", EvaluationController.mod);
router.get("/getEvaluationRegex/", EvaluationController.regex);
router.get("/getEvaluationText/", EvaluationController.text);
router.get("/getEvaluationWhere/", EvaluationController.where);

module.exports = router;
