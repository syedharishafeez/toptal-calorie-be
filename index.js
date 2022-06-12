let express = require("express");
let bodyParser = require("body-parser");
let calorieRoutes = require("./routes/calorie.route");
let friendRoutes = require("./routes/friend.route");
const { decodeRequestToken } = require("./middlewares");
const { connectDB } = require("./utils/database");
const PORT = 5000;

var app = express();
connectDB();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "app is running" });
});

app.use("/calorie", decodeRequestToken, calorieRoutes);
app.use("/invite-friend", decodeRequestToken, friendRoutes);

app.listen(PORT, () => {
  console.log("listening to ", PORT);
});
