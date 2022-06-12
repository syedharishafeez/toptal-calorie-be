let express = require("express");
let router = express.Router();

let CalorieController = require("../controllers/calorie.controller");

router.get("/", CalorieController.getCalories);
router.post("/", CalorieController.addCalorie);
router.put("/:id", CalorieController.updateCalorie);
router.delete("/:id", CalorieController.deleteCalorie);

module.exports = router;
