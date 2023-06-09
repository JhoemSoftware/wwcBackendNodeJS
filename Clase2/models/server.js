const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('colors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.host = 'http://localhost';
        this.urlRoute = '/api';

        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`App Clase 2 • Listening at `.cyan + `${this.port}`.yellow + ` 😀\nUrl: `.blue + `${this.host}:${this.port}${this.urlRoute} 🌐`);
        });
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.urlRoute, require('./../routes/route'));
    }
}

module.exports = Server;