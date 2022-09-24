const Tour = require('../models/Tour');

exports.getAllToursService = async(queries) => {
    const tours = await Tour.find().skip(queries.skip).limit(queries.limit).select(queries.fields).sort(queries.sortBy)
    return tours;
}

exports.addTourService = async(tour) => {
    const result = await Tour.create(tour);
    return result;
}