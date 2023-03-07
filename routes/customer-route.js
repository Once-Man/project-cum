const express = require('express');
const router = express.Router();
const {getAllCustomers, getAddCustomerView, addCustomer,getUpdateCustomerView,updateCustomer,getDeleteCustomerView,deleteCustomer,oneCustomerData} = require('../controllers/customerController');

router.get('/', getAllCustomers);
router.get('/addCustomer', getAddCustomerView);
router.post('/addCustomer', addCustomer);
router.get('/updateCustomer/:id', getUpdateCustomerView);
router.post('/updateCustomer/:id', updateCustomer);
router.get('/deleteCustomer/:id', getDeleteCustomerView);
router.post('/deleteCustomer/:id', deleteCustomer);
router.get('/showCustomer/:id', oneCustomerData)

module.exports = {
    routes:router
};