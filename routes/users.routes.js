const express = require ('express');


const { userExists } = require ('../middlewares/middlewares.users.js');
const {
    createUserValidations , checkValidations
} = require ('../middlewares/middlewares.validations.js')



//controllers
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require ('../controllers/users.controller.js');

    const router = express.Router ();

    router.get('/getAllUsers');
    router.post('/' , createUserValidations , 
                        checkValidations , createUser);

    router.route('/').get(getAllUsers).post(createUsers);

    router.route('/:id').get(userExists , getUserById).patch(userExists , updateUser).delete(userExists , deleteUser);
    
    module.exports = { usersRouter: router };




