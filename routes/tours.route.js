const express = require('express');
const { getAllTours, addTour } = require('../controllers/tours.controller');


const router = express.Router();



router.route('/')
.get(getAllTours)
.post(addTour)

module.exports = router;