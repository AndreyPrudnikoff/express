const pool = require('../postgres')
const UserController = {
    async getUsers(req, res) {
        const user = await pool.query(`SELECT * FROM users;`)
        res.send(user.rows)
    },
    async getUser(req, res) {
        const id = req.params.id
        const user = await pool.query(`SELECT * FROM users WHERE id='${id}';`)
        res.send(user.rows.shift())
    },
    async updateUser(req, res) {

    },
    async deleteUser(req, res) {

    },
}
module.exports = UserController
