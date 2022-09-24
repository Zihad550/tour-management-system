const express = require('express');
const { getAllTours, addTour, getTourById, updateTourById, getTrendingTours, getCheapestTours} = require('../controllers/tours.controller');


const router = express.Router();

router.get('/trending', getTrendingTours)
router.get('/cheapest', getCheapestTours)


router.route('/')
.get(getAllTours)
.post(addTour)

router.route('/:id')
.get(getTourById)
.patch(updateTourById)

module.exports = router;