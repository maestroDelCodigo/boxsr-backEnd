const util = require("util");
const multer = require("multer");
// ADD THIS LINE to increase file size limit to 1GB
const maxSize = 1 * 1024 * 1024 * 1024;

// https://bezkoder.com/node-js-express-file-upload/

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;