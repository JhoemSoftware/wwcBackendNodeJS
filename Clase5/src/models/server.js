const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('colors');

const { dbConn } = require('./../utils/');

class Server {
    constructor(){
        this.app            = express();
        this.host           = 'http://localhost';
        this.urlPath        = '/api/v1/';
        this.urlPathHealth  = '/api/v1/health/';
        this.port           = process.env.PORT;

        this.connDB();
        this.middlewares();
        // this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Clase 5 App Listening at `.cyan + `${this.port}`.yellow + ` 😀\nUrl `.green + `${this.host}:${this.port}${this.urlPath} ⚙️`);
        });
    }

    async connDB() {
        await dbConn();
    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    routes(){
        this.app.use(this.urlPath, require('../routes/'));
    }
}

module.exports = Server;