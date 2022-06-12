let Friend = require("../models/friend.model");

exports.addFriend = async function (query, payload) {
  try {
    let savedFriend = await Friend.findOneAndUpdate(query, payload, {
      upsert: true,
      new: true,
    });
    delete savedFriend._doc["password"];
    return savedFriend;
  } catch (e) {
    console.log("e === ", e);
    throw Error("Error while adding a friend");
  }
};
