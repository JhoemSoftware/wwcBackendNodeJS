const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('colors');

const { dbConn } = require('../settings/conn');

class Server {
    constructor(){
        this.app            = express();
        this.host           = 'http://localhost';
        this.urlPath        = '/api/v1/products/';
        this.urlPathHealth  = '/api/v1/products/health/';
        this.port           = process.env.PORT;

        this.connDB();
        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Clase 4 App Listening at `.cyan + `${this.port}`.yellow + ` 😀\nUrl `.green + `${this.host}:${this.port}${this.urlPath} ⚙️`);
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
        this.app.use(this.urlPath, require('../routes/products'));
        // this.app.use(this.urlPathHealth, require('../routes/health'));
    }
}

module.exports = Server;