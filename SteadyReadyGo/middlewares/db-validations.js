const Products = require('../models/products');
const product = new Products();

const infoDataBaseExistsByID = async (id = '') => {
    const dataBD = await product._products.find( p => p.id === Number(id) );
    
    if(!dataBD) return;

    return dataBD.id;
}

const infoDataBaseExistsByName = async (name = '') => {   
    const dataBD = await product._products.find( p => p.name === name )?.name;
    
    if(!dataBD) return;
    
    return dataBD;
}

module.exports = {
    infoDataBaseExistsByID,
    infoDataBaseExistsByName
}