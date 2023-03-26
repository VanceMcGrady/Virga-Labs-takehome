const express = require('express');
const router = express.Router();
const axios = require('axios')

// gets lake powell storage volume and attaches data to res.locals to be sent to front-end
router.get('/', async (req, res, next)=> {
  const response = await axios.get('https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/json/17.json')
  res.locals.data = response.data
  next()
})

module.exports = router