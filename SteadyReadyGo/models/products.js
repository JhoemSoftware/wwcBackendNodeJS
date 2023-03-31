const fs = require('fs');
require('./../database/db.json');

class Products {
    _products   = [];
    _dbPath     = 'SteadyReadyGo!/database/db.json';

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
        const product = this._products.find( p => p.id === id );
        
        if(!product) return;

        product.name        = data['name'];
        product.reference   = data['reference'];
        product.price       = data['price'];
        product.cylinder    = data['cylinder'];
        product.stock       = data['stock'];

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

        console.log(this._dbPath)

        fs.writeFileSync( this._dbPath, JSON.stringify(manyRows) );
        fs.writeFileSync( 'SteadyReadyGo!/database/db.txt', JSON.stringify(manyRows) );
    }

    readDB(){
        if(!fs.existsSync(this._dbPath)) return;

        const info = fs.readFileSync(this._dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        this._products = data.products;
    }
}

module.exports = Products;