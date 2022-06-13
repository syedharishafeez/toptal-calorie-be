let CalorieService = require("../services/calorie.service");

exports.getCalories = async function (req, res, next) {
  try {
    let query = {};
    if (req.headers.decodedToken.role === "user") {
      query["userId"] = req.headers.decodedToken.userId;
    } else if (req.query.userId) {
      query["userId"] = req.query.userId;
    }
    if (req.query.fromDate || req.query.toDate) {
      if (
        (req.query.fromDate && !req.query.toDate) ||
        (!req.query.fromDate && req.query.toDate)
      ) {
        throw Error("both fromDate and toDate are required");
      } else if (new Date(req.query.fromDate) > new Date(req.query.toDate)) {
        throw Error("fromDate should be smaller than or equal to toDate");
      } else if (req.query.fromDate === req.query.toDate) {
        query["time"] = {
          $eq: new Date(req.query.fromDate),
        };
      } else {
        query["time"] = {
          $gte: new Date(req.query.fromDate),
          $lte: new Date(req.query.toDate),
        };
      }
    }

    let calories = await CalorieService.getCalories({ ...query });
    return res.status(200).json({
      status: 200,
      data: calories,
      message: "Calories retrieved successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addCalorie = async function (req, res, next) {
  try {
    let payload = {
      ...req.body,
      userId:
        req.headers.decodedToken.role === "user"
          ? req.headers.decodedToken.userId
          : req.body.userId,
    };
    let calories = await CalorieService.addCalorie({ ...payload });
    return res.status(200).json({
      status: 200,
      data: calories,
      message: "Calorie added successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteCalorie = async function (req, res, next) {
  try {
    let query = { _id: req.params.id };
    if (req.headers.decodedToken.role === "user") {
      query["userId"] = req.headers.decodedToken.userId;
    }
    let calories = await CalorieService.deleteCalorie({ ...query });
    if (calories) {
      return res.status(200).json({
        status: 200,
        //   data: calories,
        message: "Calorie deleted successfully",
      });
    } else {
      return res.status(400).json({
        status: 400,
        //   data: calories,
        message: "No such calorie found",
      });
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateCalorie = async function (req, res, next) {
  try {
    let query = { _id: req.params.id };
    let payload = { ...req.body };
    if (req.headers.decodedToken.role === "user") {
      query["userId"] = req.headers.decodedToken.userId;
    }
    let calories = await CalorieService.updateCalorie(
      { ...query },
      { ...payload }
    );
    if (calories) {
      return res.status(200).json({
        status: 200,
        data: calories,
        message: "Calorie updated successfully",
      });
    } else {
      return res.status(400).json({
        status: 400,
        //   data: calories,
        message: "No such calorie found",
      });
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
