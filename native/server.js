const http = require('http')
const router = require('./router')
const client = require("../db/controller");

const server = http.createServer(async (req, res) => {
    let data
    if (req.url === '/users') {
       await client.query('SELECT * FROM users')
            .then(response => {
                data = JSON.stringify(response.rows)
            })
            .catch(console.error)
        res.writeHead(200, {'Content-Type': 'application0json'})
       await res.end(data)
    }
    // const data = router[req.url]()
    // res.end(data)
})

module.exports = server
