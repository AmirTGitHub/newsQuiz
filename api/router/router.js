const express = require("express");
const router = express.Router();
const dbController = require("../controllers/dbController");

router.get("/hello", dbController.homepage);
router.get("/quiz", dbController.getQuiz);
router.post("/quiz", dbController.postQuiz);

module.exports = router;
