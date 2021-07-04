const Router = require('express')
const UserRouter = new Router()
const UserController = require('../controller/user.controller')

UserRouter.post('api/user', UserController.createUser)
UserRouter.get('api/user', UserController.getUsers)
UserRouter.get('api/user/:id', UserController.getUser)
UserRouter.put('api/user/:id', UserController.updateUser)
UserRouter.delete('api/user/:id', UserController.deleteUser)

module.exports = UserRouter
