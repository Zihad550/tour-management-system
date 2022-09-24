const mongoose = require('mongoose');


const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tour name not provided'],
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    description: {
        type: String,
        required: [true, 'Tour description not provided'],
    },
    price: {
        type: Number,
        required: [true, 'Tour price not provided'],
        min: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
    img: {
        type: String,
        required: [true, 'Tour image link not provided'],
    },
   

})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;