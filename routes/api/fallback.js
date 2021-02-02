const router = require("express").Router();
const fallbackController = require("../../controllers/fallback.controller");

router.get("/", fallbackController.viewAll);
router.post("/addFallback", fallbackController.addFallback);
router.delete("/deleteFallback/:id", fallbackController.delete);

module.exports = router;