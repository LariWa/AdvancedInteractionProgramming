import axios from "axios";

const express = require('express')
const router = express.Router()

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/get/randomMeal', (req, res) => {
 axios.get("/random.php").then(({data}:{data: {meals:[{}]}}) =>res.send(data.meals[0]))
})


module.exports = router