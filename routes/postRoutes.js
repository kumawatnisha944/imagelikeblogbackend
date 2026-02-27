const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/create", postController.createPost);
router.get("/", postController.getPost);
router.post("/like/:id", postController.likePost);
router.post("/comment/:id", postController.addComment);
router.delete("/comment/:postId/:commentId", postController.deleteComment);

module.exports = router;