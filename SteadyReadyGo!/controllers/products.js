const { response } = require("express");
const {
    infoDataBaseExistsByID,
    infoDataBaseExistsByName
} = require('../middlewares/db-validations');

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

    const product = await products.findProduct(existsBD)
    res.json({ product });
}

const productsPost = async ( req, res = response ) => {
    res.json('Method Post');
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