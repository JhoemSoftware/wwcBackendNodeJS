const { response } = require("express");

const { infoDataBaseExistsByID, infoDataBaseExistsByName } = require('../middlewares/db-validations');
const { validateInteger } = require('./../middlewares/validator-fields');

const Products = require('./../models/products');
const products = new Products();

/* API Request Methods */
const productsGet = ( req, res = response ) => res.json({ "products": products._products });

const productsGetByID = async ( req, res = response ) => {
    const { id } = req.params;
    
    const existsBD = await infoDataBaseExistsByID(id);    
    
    if(!existsBD) {
        res.status(400).json({
            "error": `Producto con código: ${id}, no se encuentra disponible`
        });
        return;
    }

    const product = await products.findProduct(existsBD);
    res.json({ product });
}

const productsPost = async ( req, res = response ) => {
    const { name, reference, price, cylinder, stock } = req.body;

    const existsBD = await infoDataBaseExistsByName(name);

    if(existsBD){
        res.status(400).json({
            "error": `El producto ${name} ya se encuentra registrado`
        });
        return;
    }

    const validatorInt = await validateInteger(price, cylinder, stock);

    if(!validatorInt) {
        res.status(400).json({
            "error": "La información enviada es incorrecta, favor validar"
        });
        return;
    }

    const lastProductID = (products._products[products._products.length - 1].id) + 1;

    const newProduct = [ lastProductID, name, reference, validatorInt[0], validatorInt[1], validatorInt[2] ];

    const productNew = await products.addProduct(newProduct);

    res.json({
        "success": `El producto ${productNew}, ha sido registrado`
    });
}

const productsPatch = async ( req, res = response ) => {
    res.json('Method Patch');
}

const productsDelete = async ( req, res = response ) => {
    const { id } = req.params;
    
    const existsBD = await infoDataBaseExistsByID(id);    
    
    if(!existsBD) {
        res.status(400).json({
            "error": `Producto con código: ${id}, no se encuentra disponible`
        });
        return;
    }

    await products.deleteProduct(existsBD);
    
    res.json({
        "success": `Producto con código: ${existsBD}, ha sido eliminado correctamente`
    });
}

module.exports = {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
}