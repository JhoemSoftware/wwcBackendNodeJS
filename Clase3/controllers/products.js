const { response } = require('express');
const Products = require('../models/products');

const productsGet = (req, res = response) => {
    res.json(Products);
}

const productsGetId = (req, res = response) => {
    const { id } = req.params;

    const productBD = Products.find( p => p.id === Number(id) );

    if(!productBD) throw new Error(`No se ha encontrado el producto con código ${id}`);

    res.json({
        msg: "OK",
        data: productBD
    });
}

const productsPOST = (req, res = response) => {
    const { id, name, price, stock } = req.body;
    const product = []

    const productBD = Products.find( p => p.id = Number(id) );

    if(!productBD) throw new Error(`No se ha encontrado el producto con código ${productID}`);
    
    res.json({
        msg: "OK",
        data: productBD
    });
}

module.exports = {
    productsGet,
    productsGetId
};