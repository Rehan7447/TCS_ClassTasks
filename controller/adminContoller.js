const student = require("../models/student");

module.exports = {
  get: (req, res, next) => {
    res.render("admin", { title: "Admin" });
  },
  postAddStudent: (req, res, next) => {
    student.create(req.body).then(
      (student) => {
        console.log("Student added successfully", student);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.send(student);
      },
      (err) => {
        res.send("Couldnt Add Student: ", err)
        console.log("Couldnt Add Student: ", err);
      }
    );
  },
  postGetAllStudents: (req, res, next) => {
    student.find().then(
      (students) => {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 500;
        res.send(students);
      },
      (err) => {
        res.send("Students data not found: ", err)
        console.log("Students data not found ", err);
      }
    );
  },
  postGetStudentById: (req, res, next) => {
    student.findById(req.body.id).then(
      (student)=>{
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 500;
        res.send(student);
      },
      (err)=>{
        res.send("Student not found", err);
        console.log("Student not found", err);
      }
    );
  },
};
