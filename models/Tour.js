const mongoose = require('mongoose');


const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    }

})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;