const Models = require('../models/index');
const userService = require('../services/users');

module.exports = [
    { method: 'GET', path: '/test', handler: userService.testUserService },
    { method: 'GET', path: '/users', handler: userService.getUsers },
    { method: 'GET', path: '/users/{id}', handler: userService.getUser},
    { method: 'POST', path: '/users', handler: userService.createUser },
    { method: 'PUT', path: '/users/{id}', handler: userService.updateUser },
    { method: 'DELETE', path: '/users/{id}', handler: userService.deleteUsuer }
];