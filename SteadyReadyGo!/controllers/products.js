const { response } = require("express");
const Products = require('./../models/products');

const product = new Products();

const productsGet = ( req, res = response ) => res.json( product._products );

module.exports = {
    productsGet
}