const Product = require('../models/product');

const existsNameProduct = async (name = '') => {
    const nameBD = await Product.findOne({ name });    
    if(nameBD) throw new Error('Ya se encuentra registrado el Nombre en otro producto');
}

const existsProductByID = async (id = '') => {
    const productDB = await Product.findById(id);
    
    if(!productDB) return;
    
    return productDB;
}

module.exports = {
    existsNameProduct,
    existsProductByID
}