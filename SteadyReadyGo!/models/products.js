const fs = require('fs');
require('./../database/db.json');

class Products {
    _products   = [];
    _dbPath     = 'SteadyReadyGo!/database/db.json';

    constructor(){
        this.readDataBase();
    }

    readDataBase(){
        if(!fs.existsSync(this._dbPath)) return;

        const info = fs.readFileSync(this._dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        this._products = data.products;
    }
}

module.exports = Products;