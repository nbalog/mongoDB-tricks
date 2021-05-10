const express = require("express");
const ArrayController = require("../controllers/array");
const router = express.Router();

router.get("/getArrayAll/", ArrayController.all);
router.get("/getArraySize/", ArrayController.size);
router.get("/getArrayElemMatch/", ArrayController.elemMatch);

module.exports = router;
