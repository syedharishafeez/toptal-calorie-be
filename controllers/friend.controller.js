const { generatePassword, generateToken } = require("../middlewares");
let FriendService = require("../services/friend.service");

exports.inviteFriend = async function (req, res, next) {
  try {
    let payload = {
      ...req.body,
      friendOf: req.headers.decodedToken.userId,
      password: generatePassword(),
    };
    let friend = await FriendService.addFriend(
      { email: req.body.email },
      { ...payload }
    );
    let token = generateToken({ userId: friend._id, role: "user" });
    let invitedFriend = await FriendService.updateFriendInvite(
      { _id: friend._id },
      { token }
    );
    return res.status(200).json({
      status: 200,
      data: invitedFriend,
      message: "Friend invited successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
