const server = require('./native/server')
const client = require('./db/controller')
const PORT = process.env.PORT || 7000

server.listen(PORT)
client.connect().then(() => console.log('connected')).catch(err => console.error('connection error', err.stack))
