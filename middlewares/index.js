const jwt = require("jsonwebtoken");
const JWT_SECRET = "toptal-test";
exports.decodeRequestToken = (req, res, next) => {
  // user token
  let token =
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsInVzZXJJZCI6IjEtODkiLCJpYXQiOjE2NTUxMjcyMTN9.9pkEp57usRU-q_YYkocLbofHOstOZSKFeW-wnmgMRFE";
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmE1Mjk2NGEyZjY5N2ZjY2M2Nzk5MzMiLCJyb2xlIjoidXNlciIsImlhdCI6MTY1NTEyODA3MX0.XIR6FZf4KEj37jBGoI607IL33N9QrpJnfG0YlIHXbAQ";

  // admin token
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiJhZG1pbjEyMyIsImlhdCI6MTY1NTEyNzI2Mn0.xGYlM0ryOoiCJ_oLnlyLdydacZtlTQPapI20VAihq78";
  let decodedToken = jwt.verify(token, JWT_SECRET);
  req.headers = { ...req.headers, decodedToken: { ...decodedToken } };
  next();
};

exports.generatePassword = () => {
  let length = 8;
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  let n = charset.length;

  for (var i = 0; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};

exports.generateToken = (payload) => {
  let token = jwt.sign(payload, JWT_SECRET);
  return token;
};
