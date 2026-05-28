const { Booking } = require('../models/index');
const {StatusCodes} = require('http-status-codes');
const {ValidationError , AppError} = require('../utils/errors/index');

class BoookingRepository {

    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
    } catch (error) {
      if(error.name == 'SequelizeValidationError'){
        throw new Validation(error);
       }
       throw new AppError(
        'RepositoryError' , 
        'Cannot create booking',
        'There was some issue creating the booking , please try again',
        StatusCodes.INTERNAL_SERVER_ERROR
    );


    }
}


    async update(data){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = BoookingRepository;