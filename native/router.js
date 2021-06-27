const client = require("../db/controller")
const reader = require('./fs')
const fs = require('fs')
const path = require('path')

const routes = {
    GET: {
        "/": (req, res) => res.end("Login route"),
        "/favicon.ico": (res) => {
            const icon = reader()
            console.log(typeof icon)
            res.writeHead(200, { "Content-Type": "image/png" });
            return res.end(icon)
        },
        "/users": (req, res) => {
            client.query("SELECT * FROM users")
                .then((response) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(response.rows));
                })
                .catch(console.error);
        },
    },
    POST: {
        "/login": (req, res, str) => {
            client.query(`SELECT * FROM users WHERE name='${str.name}'`)
                .then((response) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(response.rows));
                })
                .catch(console.error);
        },
    },
};

module.exports = routes;
