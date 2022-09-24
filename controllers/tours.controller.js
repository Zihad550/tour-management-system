const { getAllToursService } = require("../services/tours.service")


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