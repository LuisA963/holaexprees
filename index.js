const express = require('express')

const app = express()

//http://localhost:3000/
app.get('/', (request, response) => {
    response.send("Hello World!")
})




app.listen(3000, () => {console.log('listening on port 3000')})