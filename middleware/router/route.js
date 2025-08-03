 // CREATING this route only for Student


 
const express = require("express");
const router = express.Router();
// middleware
const auth = function (req, res, next) {
  console.log("I am doing authentication");

  // dummy user 
  req.user = { userId: 1, role: "student" };



  if (req.user) {
    // if valid user then proceed to next middleware
    next();
  } else {
    // if not a valid user
    res.json({
      success: false,
      message: "Not a Valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("Iam inside Student Middleware");
  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Not a Valid user this route is for student",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("Iam inside Admin Middleware");
  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Not a Valid user this route is for Admin",
    });
  }
};


//routes
router.get('/student',auth,isStudent,(req,res) =>{
    console.log("I am inside Student Specific Route")
    res.send("Students specific Route")
})

router.get('/admin',auth,isAdmin,(req,res) =>{
    console.log("I am inside Admin Specific Route")
    res.send("Admin specific Route")
})

module.exports = router;
