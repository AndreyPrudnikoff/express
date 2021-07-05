const Router = require('express')
const MainRouter = new Router()
const MainController = require('../controller/main.controller')

MainRouter.post('/login', MainController.identificationUser)
MainRouter.post('/register', MainController.createUser)

module.exports = MainRouter
