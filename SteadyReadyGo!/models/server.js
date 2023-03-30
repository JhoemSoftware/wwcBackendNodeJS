const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('colors');

class Server {
    constructor(){
        this.app        = express();
        this.host       = 'http://localhost';
        this.port       = process.env.PORT;
        this.urlRoute   = '/api';

        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Proyecto: Steady, Ready, go! • App Listening at `.cyan + `${this.port}`.yellow + ` 😀\nUrl API: `.green + `${this.host}:${this.port}${this.urlRoute} ⚙️`);
        });
    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        // this.app.use( express.static('public') );
    }
    
    routes(){
        this.app.use(this.urlRoute, require('../routes/route'));
    }
}

module.exports = Server;