import StudentModel from "../models/Student.js";

class StudentController {
  static createDoc = (req, res) => {
    res.redirect("/student");
  };
  // get all doc
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      console.log(result);
      res.render("index", { data:result });
    } catch (error) {
      console.log(error);
    }
  };

  //   edit
  static editDoc = (req, res) => {
    res.render("edit");
  };

  //   update
  static updateDoc = (req, res) => {
    res.redirect("/student");
  };

  //   delete
  static deleteDoc = (req, res) => {
    res.redirect("/student");
  };
}

export default StudentController;
