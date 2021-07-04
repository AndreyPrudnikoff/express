const express = require('express')
const UserRouter = require('./routes/user.router')
const app = express()

app.use('/api/user', UserRouter)
module.exports = app
