const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = mongoose.Schema({
    firstname: {
        type:String,
        minlength:2,
        maxlength:30,
        required:true
    },
    lastname: {
        type:String,
        minlength:2,
        maxlength:30,
        required:true
    },
    phonenumber: {
        type:String,
        minlength:11,
        required:true
    },
    cnic: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    }
});

const Customer = mongoose.model('Customer', customerSchema);

const validateCustomer = (customer) => {
    const schema = {
        firstname: Joi.string().min(2).max(30).required(),
        lastname: Joi.string().min(2).max(30).required(),
        phonenumber: Joi.string().min(11).required(),
        cnic: Joi.string().required(),
        address: Joi.string().required()
    };
    return Joi.validate(customer,schema)
}

// const validateCustomer = (customer) => {
//     const schema = {
//         firstname: Joi.string().min(2).max(30).required().error(() => {
//             return {
//               message: 'firstname is required.',
//             };
//           }),
//         lastname: Joi.string().min(2).max(30).required().error(() => {
//             return {
//               message: 'lastname is required.',
//             };
//           }),
//         phonenumber: Joi.string().min(11).required().error(() => {
//             return {
//               message: 'Phonenumber is required.',
//             };
//           }),
//         cnic: Joi.string().required()
//         .error(() => {
//             return {
//               message: 'Cnic is required.',
//             };
//           }),
//         address: Joi.string().required().error(() => {
//             return {
//               message: 'Address is required.',
//             };
//           }),
//     }
//     return Joi.validate(customer,schema)
// }
module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;