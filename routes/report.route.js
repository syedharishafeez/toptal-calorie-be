let express = require("express");
let router = express.Router();

let ReportController = require("../controllers/report.controller");

router.get("/", ReportController.getThisAndLastWeekReport);

module.exports = router;
