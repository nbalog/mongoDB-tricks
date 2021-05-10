const express = require("express");
const CommentController = require("../controllers/comment");
const router = express.Router();

router.get("/getCommentComment/", CommentController.comment);

module.exports = router;