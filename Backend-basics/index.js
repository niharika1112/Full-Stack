// express ko apni app m include krliya isse
 const express = require('express');

 // express ko app m initialise kr rhe h
 const app = express();

 // giving a respective port to app(variable storing port number)
 const port = 5173;

               // ABOUT REQUESTS
// // GET request
//  app.get('/',(req,res) =>{
//     console.log("finally smjh aya");
//       // res.send("Hello from Express!");
//       res.sendFile('./sendFile.html',{
//          root:__dirname
//       })
//  });

//  // POST Requests
// app.post('/items',(req,res)=>{
//    //  res.send("Yeh POST request h");
//     res.json({x:1,y:2})
// })

// //PUT requests
// app.put('/items/id',(req,res)=>{
//    res.send("yeh PUT request h")
// })

// //DELETE requests
// app.delete('/items/id',(req,res)=>{
//    res.send("yeh DELETE request h")
// })



         // SETTING Up a Router
// 1: import item ki Router file
const item = require('./router/item')
// 2:Load into Application
app.use('/api',item)

 // start your app
 app.listen(port,()=>{
    console.log("hi")
 });


