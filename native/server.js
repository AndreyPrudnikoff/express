const http = require("http");
const router = require("./router");

const server = http.createServer(async (req, res) => {
    let str = ''
    if (req.method === 'POST') {
        const chunks = []
        req.on('data', chunk => chunks.push(chunk))
        req.on('end', () => {
            str = Buffer.concat(chunks)
            router[req.method][req.url](req, res, JSON.parse(str))
        })
    } else router[req.method][req.url](req, res)

});

module.exports = server;
