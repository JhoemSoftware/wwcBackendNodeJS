const fs = require('fs');
require('./../database/db.json');

class Products {
    _products   = [];
    _dbPath     = 'SteadyReadyGo/database/db.json';
    _dbPathTXT  = 'SteadyReadyGo/database/db.txt';

    constructor(){
        this.readDB();
    }

    findProduct(product = 0){
        return this._products.find( p => p.id === product );
    }

    addProduct(product = []){
        const newProduct = {
            id:         product[0],
            name:       product[1],
            reference:  product[2],
            price:      product[3],
            cylinder:   product[4],
            stock:      product[5]
        }

        this._products.push(newProduct);
        
        this.saveBD();

        return newProduct.name;
    }

    editProduct(id = 0, data = []){
        const product = this._products.find( p => p.id === Number(id) );

        product.name        = data[0];
        product.reference   = data[1];
        product.price       = data[2];
        product.cylinder    = data[3];
        product.stock       = data[4];

        this.saveBD();

        return product;
    }

    deleteProduct(id = 0){
        this._products = this._products.filter( p => p.id != Number(id) );
        
        this.saveBD();

        return true;
    }

    saveBD(){
        const manyRows = {
            products: this._products
        };

        fs.writeFileSync( this._dbPath, JSON.stringify(manyRows) );
        fs.writeFileSync( this._dbPathTXT, JSON.stringify(manyRows) );
    }

    readDB(){
        if(!fs.existsSync(this._dbPath)) return;

        const info = fs.readFileSync(this._dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        this._products = data.products;
    }
}

module.exports = Products;