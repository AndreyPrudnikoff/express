const express = require('express')
const cors = require('cors')

const UserRouter = require('./routes/user.router')
const MainRouter = require('./routes/main.router')
const app = express()

app.use(express.json())
app.use(cors({ "origin": "http://localhost:3000" }))

app.use('/api', MainRouter)
app.use('/users', UserRouter)

module.exports = app
