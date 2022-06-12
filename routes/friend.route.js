let express = require("express");
let router = express.Router();

let FriendController = require("../controllers/friend.controller");

router.post("/", FriendController.inviteFriend);

module.exports = router;
