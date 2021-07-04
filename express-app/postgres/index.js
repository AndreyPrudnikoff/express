const { Pool } = require('pg')

const pool = new Pool({
    user: 'andrey',
    password: '123456',
    host: '127.0.0.1',
    port: 5432
})
