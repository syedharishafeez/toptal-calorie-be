const { generatePassword } = require("../middlewares");
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
    return res.status(200).json({
      status: 200,
      data: friend,
      message: "Friend invited successfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
