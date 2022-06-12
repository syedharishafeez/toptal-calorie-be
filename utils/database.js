const mongoose = require("mongoose");

exports.connectDB = async () => {
  const url = `mongodb://localhost:27017/calorie`;
  try {
    let conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (ex) {
    console.log("Failed to connect database", ex);
  }
};
