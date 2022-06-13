const mongoose = require("mongoose");

const FriendsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
    friendOf: { type: String, required: true },
  },
  { timestamps: true }
);

const Friend = mongoose.model("Friend", FriendsSchema);

module.exports = Friend;
