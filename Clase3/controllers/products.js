const { response } = require('express');
const Products = require('../models/products');

const productsGet = (req, res = response) => {
    res.json(Products);
}

const productsGetId = (req, res = response) => {
    const { id } = req.params;

    const productBD = Products.find( p => p.id === Number(id) );

    if(!productBD) throw new Error(`No se ha encontrado el producto con código ${id}`);

    res.json(productBD);
}

const productsPost = (req, res = response) => {
    const { name, price, stock } = req.body;

    const id = (Products[Products.length - 1].id) + 1;

    const product = { id, name, price, stock }

    Products.push(product);
    
    res.json(product);
}

const productsPut = (req, res = response) => {
    
}

const productsDelete = (req, res = response) => {
    
}

module.exports = {
    productsGet,
    productsGetId,
    productsPost,
    productsPut,
    productsDelete
};