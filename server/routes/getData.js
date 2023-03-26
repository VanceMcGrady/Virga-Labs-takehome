const express = require('express');
const router = express.Router();
const fetch = import('node-fetch')


router.get('/', async (req, res, next)=> {
  console.log('get working in getData.js')

  res.locals.data = {rainfall: 3}
  next()
})

module.exports = router