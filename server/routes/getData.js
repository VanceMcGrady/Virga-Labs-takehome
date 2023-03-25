const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=> {
  console.log('get working in getData.js')
  const data = { 'rainfall': 1, 'rainfall2': 2 }
  res.locals.data = data
  next()
})

module.exports = router