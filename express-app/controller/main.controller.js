const MainController = {
    async createUser(req, res) {
        const { name, email, password } = req.body
        console.log(name, email, password)
        res.json('ok')
    },

    async identificationUser(req, res) {

    },
    async updateUser(req, res) {

    },
    async deleteUser(req, res) {

    },
}

module.exports = MainController
