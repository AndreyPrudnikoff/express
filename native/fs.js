const fs = require('fs')
const path = require('path')

module.exports = () => {
    let file
    fs.readFile(path.join(__dirname, "../static/favicon.ico"), "utf8", (error, data) => {
        if (error) throw error
        file = data
    })
    return file
}
