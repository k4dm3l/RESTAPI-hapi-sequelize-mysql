const Models = require('../models/index');

const testUsers = async (request, handler) => {
    return { message: 'test' }
}

const getUsers = async (request, handler) => {
    try {
        const users = await Models.User.findAll({});
        return { data: users }
    } catch (error) {
        return handler.response({ error: error.message }).code(400);
    }
};

const createUsers = async (request, handler) => {
    try {
        const { name, email } = request.payload;
        const user = await Models.User.create({
            name: name,
            email: email
        });
        return {
            data: user,
            message: 'New user created'
        }
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
}

const updateUsers = async (request, handler) => {
    try {
        const user_id = request.params.id;
        const { name, email } = request.payload;
        const user = await Models.User.update({
            name: name,
            email: email
        }, {
            where: {
                id: user_id
            }
        });
        return {
            message: 'User updated'
        }
    } catch (error) {
        return handler.response({
            error: error.message
        }).code(400);
    }
}

const deleteUsuer = async (request, handler) => {
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

module.exports = [
    { method: 'GET', path: '/test', handler: testUsers },
    { method: 'GET', path: '/users', handler: getUsers },
    { method: 'POST', path: '/users', handler: createUsers },
    { method: 'PUT', path: '/users/{id}', handler: updateUsers },
    { method: 'DELETE', path: '/users/{id}', handler: deleteUsuer }
];