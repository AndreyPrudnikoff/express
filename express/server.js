const app = require('express')()

app.get('/', (req, res) => {
    res.send('Express')
})

module.exports = app
