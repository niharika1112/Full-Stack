const express = require('express')
const router = express.Router()



// define the home page route
// GET request
 router.get('/',(req,res) =>{
    // console.log("finally smjh aya");
      // res.send("Hello from Express!");
      res.sendFile('/sendFile.html',{
         root:__dirname+'/../'
      })
 });

 // POST Requests
router.post('/items',(req,res)=>{
   //  res.send("Yeh POST request h");
    res.json({x:1,y:2})
})

//PUT requests
router.put('/items/id',(req,res)=>{
   res.send("yeh PUT request h")
})

//DELETE requests
router.delete('/items/id',(req,res)=>{
   res.send("yeh DELETE request h")
})

module.exports = router
