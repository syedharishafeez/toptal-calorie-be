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

exports.updateFriendInvite = async function (query, payload) {
  try {
    let updatedFriend = await Friend.findOneAndUpdate(
      { ...query },
      { ...payload },
      { new: true }
    ).lean();
    delete updatedFriend._doc["password"];
    delete updatedFriend._doc["token"];
    return updatedFriend;
  } catch (e) {
    throw Error("Error while updating calories");
  }
};
