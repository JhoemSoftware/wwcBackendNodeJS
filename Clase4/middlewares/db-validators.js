const Product = require('../models/product');

const existsNameProduct = async (name = '') => {
    const nameBD = await Product.findOne({ name });    
    if(nameBD) throw new Error('Ya se encuentra registrado el Nombre en otro producto');
}

const existsProductByID = async (id = '') => {
    console.log(id);
    const productBD = await Product.findById(id);    
    if(!productBD) throw new Error('No existe el Producto con el identificador enviado');
}

module.exports = {
    existsNameProduct,
    existsProductByID
}