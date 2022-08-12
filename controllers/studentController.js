import StudentModel from "../models/Student.js";

class StudentController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      const doc = new StudentModel({
        name: name,
        age: age,
        fees: fees,
      });
      // saving doc
      const result = await doc.save();
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
  // get all doc
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result);
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  //   edit doc
  static editDoc = async (req, res) => {
    try {
      const result = await StudentModel.findById(req.params.id);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  //   update doc
  static updateDoc = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );

      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  //   delete doc
  static deleteDoc = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id);

      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
