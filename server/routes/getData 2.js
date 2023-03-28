const express = require('express');
const router = express.Router();
const fetch = import('node-fetch')


router.get('/', async (req, res, next)=> {
  console.log('get working in getData.js')

 
  next()
})

module.exports = router