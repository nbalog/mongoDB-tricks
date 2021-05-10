const express = require("express");
const ElementController = require("../controllers/element");
const router = express.Router();

router.get("/getElementExists/", ElementController.exists);
router.get("/getElementTypeOf/", ElementController.typeOf);

module.exports = router;
