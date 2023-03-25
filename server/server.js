const express = require('express')
const app = express()
const port = 1234

const getData = require("./routes/getData")



// api route to handle requests to water external water data from front-end
app.use('https://api/', getData, (req,res)=> {
  const data = res.locals.data
  console.log('data in server.js: ', data)
  res.json(data)
})

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})