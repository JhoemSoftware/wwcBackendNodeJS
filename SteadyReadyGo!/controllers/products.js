const { response } = require("express");
const {
    infoDataBaseExistsByID,
    infoDataBaseExistsByName
} = require('../middlewares/db-validations');

const { validatorFields } = require('./../middlewares/validator-fields');

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

    const validatorField = validatorFields(price, cylinder, stock);

    if(!validatorField) {
        res.status(400).json({
            "error": "La información enviada es incorrecta, favor validar"
        });
        return;
    }

    const lastProductID = (products._products[products._products.length - 1].id) + 1;

    const newProduct = [ lastProductID, name, reference, validatorField[0], validatorField[1], validatorField[2] ];

    const result = await products.addProduct(newProduct);

    res.json( result );
}

const productsPatch = async ( req, res = response ) => {
    res.json('Method Patch');
}

const productsDelete = async ( req, res = response ) => {
    res.json('Method Delete');
}

module.exports = {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
}