//create new express
let express = require('express')

//knowledge of what's exported from api.js - the two router.get/.post functions and returns
let api_routes = require('./routes/api.js')//js is implied but not incorrect to still add on

//create new app
let app = express()

// be able to handle JSON requests, convert data to js
app.use(express.json())

//enable app to be able to respond to requests to the routes
//all requests will be made to path beginning with /api
app.use('/api', api_routes)

//create server to run app that has confirmation message that server is running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})