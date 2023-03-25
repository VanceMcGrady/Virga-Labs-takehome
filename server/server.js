const e = require('express');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('testing')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})