const Product = require('../models/product');

/* const existeEmail = async (email = '') => {
    const emailBD = await Product.findOne({email});    
    if(emailBD) throw new Error('Ya se encuentra registrado el email en otro usuario');
} */

const existsProductByID = async (id = '') => {
    console.log(id);
    const productBD = await Product.findById(id);    
    if(!productBD) throw new Error('No existe el Producto con el identificador enviado');
}

module.exports = {
    // existeEmail,
    existsProductByID
}