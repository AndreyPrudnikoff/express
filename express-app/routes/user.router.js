const Router = require('express')
const UserRouter = new Router()
const UserController = require('../controller/user.controller')

UserRouter.get('/', UserController.getUsers)
UserRouter.get('/:id', UserController.getUser)
UserRouter.put('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)

module.exports = UserRouter
