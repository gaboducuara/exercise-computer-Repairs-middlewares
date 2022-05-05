
const express = require('express');

const { repairPending } = require ('../middlewares/middlewares.repairs.js')
const {
    createUserValidations , checkValidations
} = require ('../middlewares/middlewares.validations'); 


//controllers
const {
    getAllrepairs,
    createRepair,
    getRepairById,
    updateRepair,
    deleteRepair,
} = require ('../controllers/repairs.controller');

const router = express.Router();

router.route('/').get(getAllrepairs).post(createRepair);

router
    .route('/:id')
    .get(repairPending, getRepairById)
    .patch(updateRepair, updateRepair)
    .delete(repairPending , deleteRepair);

module.exports = { repairsRouter: router };