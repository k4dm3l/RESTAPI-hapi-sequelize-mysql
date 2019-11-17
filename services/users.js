const Models = require('../models/index');
const userService = {};

//Test Service Function
userService.testUserService = async(request, handler) => { return { message: 'test' } };

//Get all users data
userService.getUsers = async(request, handler) => {
    try {
        const users = await Models.User.findAll({});
        return { data: users };
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
};

//Get a specific user
userService.getUser = async(request, handler) => {
    try {
        const user_id = request.params.id;
        const user = await Models.User.findAll({
            where: {
                citizen_id: user_id
            }
        });
        return { data: user };
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
};

//Create user
userService.createUser = async(request, handler) => {
    try {
        const { citizen_id, name, email, address, phonenumber } = request.payload;
        const user = await Models.User.create({
            citizen_id: citizen_id,
            name: name,
            email: email,
            address: address,
            phonenumber: phonenumber
        });
        return {
            data: user,
            message: 'New user created'
        };
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
}

//Update user
userService.updateUser = async (request, handler) => {
    try {
        const user_id = request.params.id;
        const { citizen_id, name, email, address, phonenumber } = request.payload;
        const user = await Models.User.update({
            citizen_id: citizen_id,
            name: name,
            email: email,
            address: address,
            phonenumber: phonenumber
        }, {
            where: {
                id: user_id
            }
        });
        return {
            data: user,
            message: 'User updated'
        }
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
}

//Delete user
userService.deleteUsuer = async (request, handler) => {
    try {
        const user_id = request.params.id;
        await Models.User.destroy({
            where: {
                id: user_id
            }
        });
        return { message: 'User deleted' }
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
}


module.exports = userService;