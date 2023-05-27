const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server: ioServer } = require('socket.io');

require('dotenv').config();
require('colors');


const { dbConnMongo, dbConnPostgres } = require('./../utils/');

class Server {
    constructor(){
        this.app            = express();
        this.server         = http.createServer(this.app);
        this.io             = new ioServer(this.server, { cors: { origins: '*' } });
        this.host           = 'http://localhost';
        this.urlPath        = '/api/v1/';
        this.port           = process.env.PORT;

        this.connDB();
        this.middlewares();
        this.routes();
    }

    listen(){
        this.server.listen(this.port, () => {
            console.clear();
            console.log(`Clase 5 App IO Listening at `.cyan + `${this.port}`.yellow + ` 😀\nUrl `.green + `${this.host}:${this.port}${this.urlPath} ⚙️`);
        });

        this.io.on('connection', require('./../controllers/io')); // OJOOOOO
    }

    async connDB() {
        await dbConnMongo();
        await dbConnPostgres();
    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('Clase5/src/public/'));
    }
    
    routes(){
        this.app.use(this.urlPath, require('./../routes'));
    }
}

module.exports = Server;