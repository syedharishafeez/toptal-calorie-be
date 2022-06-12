let jwt_decode = require("jwt-decode");
exports.decodeRequestToken = (req, res, next) => {
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoidXNlciIsInVzZXJJZCI6IjEtOSJ9.phwH3EMOr_cePhbgB_lP1ymDP2flOBRP5tFXfU4-gts";
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoidXNlciIsInVzZXJJZCI6IjEtODkifQ.k_N-M1bRKg-GSOJjPyWEOrHo2UgiL7leXjvfsqvMU-Y";
  let decodedToken = jwt_decode(token);
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
