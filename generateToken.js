const jwt = require("jsonwebtoken");
const JWT_SECRET = "toptal-test";
let token = jwt.sign({ role: "admin", userId: "admin123" }, JWT_SECRET);
console.log(token);
