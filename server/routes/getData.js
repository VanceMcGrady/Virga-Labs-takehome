const express = require('express')
const router = express.Router()


router.get('/api', (req, res, next)=> {
  console.log('get working in getData.js')
  next()
})

module.exports = router