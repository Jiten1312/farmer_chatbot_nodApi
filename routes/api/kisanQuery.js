const router = require("express").Router();
const KisanQueryController = require("../../controllers/kisanQuery.controller");

router.get("/", KisanQueryController.viewAll);
router.post("/dataFetch", KisanQueryController.dataFetch);
router.post("/getPrice", KisanQueryController.getPrice);
router.post("/getFertilizer", KisanQueryController.getFertilizer);
router.post("/addQuery", KisanQueryController.addQuery);
router.post("/dataFetchAll", KisanQueryController.dataFetchAll);

module.exports = router;