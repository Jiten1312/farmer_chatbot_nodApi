const router = require("express").Router();
const kisanQuery = require('./kisanQuery');
const fallback = require('./fallback');


router.use('/kisanQuery', kisanQuery);
router.use('/fallback', fallback);
module.exports = router;