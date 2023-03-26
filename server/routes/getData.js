const express = require('express');
const router = express.Router();
const axios = require('axios')


router.get('/', async (req, res, next)=> {
  console.log('get working in getData.js')

  const response = await axios.get('https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/json/17.json')
  res.locals.data = response.data
  next()
})

module.exports = router