const express = require('express')
const app = express()
const port = 3000
// It is a in-built Middleware
express.json()

// loading middleware into the app
app.use(express.json())



// CREATING middleware

const loggingMiddleware = function(req,res,next){
console.log("LOGGING")
next();
}
// Loading middleware into Application
app.use(loggingMiddleware )

const AuthMiddleman = function (req,res,next) {
console.log("AUTHENTICATION")
next();
    
}

app.use(AuthMiddleman)

const ValidateMiddleman = function (req,res,next) {
console.log("VALIDATION")
next();
    
}

app.use(ValidateMiddleman)







const route = require('./router/route')

// mounting the routes
app.use('/api',route)




// --> /api/student --> isStudent
// -->/api/admin -->isAdmin









app.get('/', (req, res) => {
    // using in-built middleware FOR EXAMPLE: printing the request body
    // yeh terminal p undefined show krra h b/c JSON parse nhi kr pa rha
    // to parse JSON Middleware is used
    console.log(req.body) 

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
