const express = require('express');
const { getAllTours, addTour, getTourById, updateTourById, getTopThreeTrendingTour } = require('../controllers/tours.controller');


const router = express.Router();

router.get('/trending', getTopThreeTrendingTour)


router.route('/')
.get(getAllTours)
.post(addTour)

router.route('/:id')
.get(getTourById)
.patch(updateTourById)

module.exports = router;