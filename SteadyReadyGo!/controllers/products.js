const { response } = require("express");

const productsGet = ( req, res = response ) => {
    res.json('Hola Steady, Ready, Go!');
}

module.exports = {
    productsGet
}