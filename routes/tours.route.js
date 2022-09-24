const express = require('express');
const { getAllTours, addTour, getTourById, updateTourById } = require('../controllers/tours.controller');


const router = express.Router();



router.route('/')
.get(getAllTours)
.post(addTour)

router.route('/:id').get(getTourById).patch(updateTourById)

module.exports = router;