const mongoose = require("mongoose");

const CalorieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: Number, required: true },
    time: { type: Date, required: true },
    isCheat: { type: Boolean, required: true, default: false },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const Calorie = mongoose.model("Calorie", CalorieSchema);

module.exports = Calorie;
