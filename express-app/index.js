const app = require('./server')
const pool = require('./postgres')

app.listen(7000, () => console.log('ok'))
pool.connect(() => console.log('connect'))
