const client = require('../db/controller')

const getUsers = () => {
    let data = ''
    client.query('SELECT * FROM users')
        .then(res => data = res)
    return data
}
const routes = {
    '/': 'Login route',
    '/users': () => getUsers()
}

module.exports = routes
