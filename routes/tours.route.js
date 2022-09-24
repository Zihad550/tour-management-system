const express = require('express');
const { getAllTours, addTour, getTourById } = require('../controllers/tours.controller');


const router = express.Router();



router.route('/')
.get(getAllTours)
.post(addTour)

router.route('/:id').get(getTourById)

module.exports = router;