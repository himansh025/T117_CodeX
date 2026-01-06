const express = require("express");
const router = express.Router()
const { healthCheck, chatBotHandler } = require("../controllers/chatBotController");
const { protect, optionalProtect } = require("../middlewares/authMiddleware");

router.post("/chathandler", optionalProtect, chatBotHandler);
router.get("/health", healthCheck);




module.exports = router;
