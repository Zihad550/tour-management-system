const Tour = require('../models/Tour');

exports.getAllToursService = async(queries) => {
    const tours = await Tour.find().skip(queries.skip).limit(queries.limit).select(queries.fields).sort(queries.sortBy)
    return tours;
}

exports.addTourService = async(tour) => {
    const result = await Tour.create(tour);
    return result;
}

exports.getTourByIdService = async(id) => {
    const tour = await Tour.findById(id);
    tour.views = tour.views + 1;
    await tour.save();
    return tour;
}