let Calorie = require("../models/calorie.model");

exports.getCalories = async function (query) {
  try {
    let calories = await Calorie.find(query);
    return calories;
  } catch (e) {
    throw Error("Error while fetching calories");
  }
};

exports.addCalorie = async function (payload) {
  try {
    // let addedCalorie = await Calorie.find(query);
    let addedCalorie = new Calorie({
      ...payload,
    });
    let savedCalorie = await addedCalorie.save();
    return savedCalorie;
  } catch (e) {
    console.log("e === ", e);
    throw Error("Error while adding calories");
  }
};

exports.deleteCalorie = async function (query) {
  try {
    let deletedCalorie = await Calorie.findOneAndDelete({ ...query });
    return deletedCalorie;
  } catch (e) {
    throw Error("Error while deleting calories");
  }
};

exports.updateCalorie = async function (query, payload) {
  try {
    let updatedCalorie = await Calorie.findOneAndUpdate(
      { ...query },
      { ...payload },
      { new: true }
    ).lean();
    return updatedCalorie;
  } catch (e) {
    throw Error("Error while updating calories");
  }
};
