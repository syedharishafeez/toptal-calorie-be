let Friend = require("../models/friend.model");

exports.addFriend = async function (query, payload) {
  try {
    let savedFriend = await Friend.findOneAndUpdate(query, payload, {
      upsert: true,
      new: true,
    });
    if (savedFriend) {
      if (savedFriend._doc) {
        delete savedFriend._doc["password"];
      } else {
        delete savedFriend["password"];
      }
    }

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
    if (updatedFriend) {
      if (updatedFriend._doc) {
        delete updatedFriend._doc["password"];
        delete updatedFriend._doc["token"];
      } else {
        delete updatedFriend["password"];
        delete updatedFriend["token"];
      }
    }

    return updatedFriend;
  } catch (e) {
    throw Error("Error while adding a friend");
  }
};
