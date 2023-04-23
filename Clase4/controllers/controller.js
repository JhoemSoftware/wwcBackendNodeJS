const { response } = require('express');

const Product = require('./../models/product');
const products = new Product();

const productsGet = ( _, res = response ) => res.json(products);

const productsGetByID = async ( req, res = response ) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'productsGetByID Controller'
    });
}

const productsPost = async ( req, res = response ) => {
    res.json({
        // id,
        msg: 'productsPost Controller'
    });
}

const productsPatch = async ( req, res = response ) => {
    res.json({
        // id,
        msg: 'productsPatch Controller'
    });
}

const productsDelete = async ( req, res = response ) => {
    res.json({
        // id,
        msg: 'productsDelete Controller'
    });
}


module.exports ={
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
};