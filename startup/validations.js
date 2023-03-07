const Joi = require('joi');
const JoiObjectId = require('joi-objectid');

module.exports = () => {
    Joi.objectId = require('joi-objectid')(Joi);
}
