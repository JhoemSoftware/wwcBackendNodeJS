const express = require('express');
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
            console.log(`App Clase 3 • Listening at `.cyan + `${this.port}`.yellow + ` 😀\nUrl API: `.green + `${this.host}:${this.port}${this.urlRoute} ⚙️\n` + `Url Web: `.green + `${this.host}:8080 🌐`);
        });
    }
    
    middlewares(){
        this.app.use( express.static('public') );
        this.app.use(express.json());
    }
    
    routes(){
        this.app.use(this.urlRoute, require('../routes/route'));
    }

}

module.exports = Server;