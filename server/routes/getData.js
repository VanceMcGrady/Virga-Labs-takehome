const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')


router.get('/', (req, res, next)=> {
  console.log('get working in getData.js')

  const method = "GET"
  const url = 'https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/json/17.json'
  fetch()
  next()
})

module.exports = router