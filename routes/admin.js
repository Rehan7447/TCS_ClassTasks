var express = require("express");
var router = express.Router();

var adminContoller = require("../controller/adminContoller");

/* GET users listing. */
router.get("/", adminContoller.get);
router.post("/addStudent", adminContoller.postAddStudent);
router.post("/getAllStudents", adminContoller.postGetAllStudents);
router.post("/getStudent", adminContoller.postGetStudentById)

module.exports = router;
