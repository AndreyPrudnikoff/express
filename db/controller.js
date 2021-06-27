const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'express',
    user: 'andrey',
    password: 'andrew200284',
})

module.exports = client
