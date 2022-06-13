const moment = require("moment");
let CalorieService = require("../services/calorie.service");

exports.getThisAndLastWeekReport = async function (req, res, next) {
  try {
    let query = {};
    query["time"] = {
      $gte: moment().subtract(6, "d").startOf("day"),
      $lte: moment(),
    };
    let thisWeekCalories = await CalorieService.getCalories({ ...query });
    query["time"] = {
      $gte: moment().subtract(13, "d").startOf("day"),
      $lte: moment().subtract(7, "d").endOf("day"),
    };
    let lastWeekCalories = await CalorieService.getCalories({ ...query });
    return res.status(200).json({
      status: 200,
      data: { thisWeekCalories, lastWeekCalories },
      message: "Calories retrieved successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
