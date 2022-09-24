const { getAllToursService, addTourService, getTourByIdService } = require("../services/tours.service")


exports.getAllTours = async(req, res, next) => {
    try{

        const {query} = req;
        const queries = {};

        if(query.sort){
            query.sortBy = query.sort.split(',').join(' ');
        }
        if(query.fields){
            queries.fields = query.fields.split(',').join(' ');
        }
        if(query.page){

            const {page=0, limit = 10} = query;
            queries.skip = (page - 1 )*Number(limit);
            queries.limit = Number(limit);
        }

        const tours = await getAllToursService(queries);
        res.status(200).json({
            status: 'Success',
            message: 'Got tours successfully',
            data: tours
        })
    }
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: 'Can not get the data',
            data: error.message
        })
    }
}


exports.addTour = async(req, res, next) => {
    try{
        const result = await addTourService(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Tour created successfully',
            data: result
        })
    }
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: 'Unable to create new tour',
            data: error.message
        })
    }
}


exports.getTourById = async(req, res, next) => {
    try{
        const result = await getTourByIdService(req.params.id);
        res.status(200).json({
            status: 'Success',
            message: 'Tour found successfully',
            data: result
        })
    }
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: 'Unable to find the tour',
            data: error.message
        })
    }
}