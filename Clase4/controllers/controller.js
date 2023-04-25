const { response } = require('express');

const { existsNameProduct, existsProductByID } = require('../middlewares/db-validators');

const Product = require('./../models/product');

const productsGet = async ( _, res = response ) => {
    const products = await Product.find();
    res.json(products);
}

const productsGetByID = async ( req, res = response ) => {
    const { id } = req.params;

    const product = existsProductByID(id);

    product
        .then((product) => res.json({ product }))
        .catch(() => {
            res.status(400).json({
                "error": `No existe producto con el código: ${id}`
            });
            return;
        })
}

const productsPost = async ( req, res = response ) => {
    const { name, description, price, stock, category } = req.body;

    const productNew = new Product({ name, description, price, stock, category });

    await productNew.save();

    res.json( productNew );
}

const productsPatch = async ( req, res = response ) => {
    const { id } = req.params;
    const { description, price, stock, category } = req.body;

    const data = { description, price, stock, category }

    const productToUpdate = await Product.findByIdAndUpdate(id, data);

    res.json( productToUpdate );
}

const productsDelete = async ( req, res = response ) => {
    const { id } = req.params;

    const productToDelete = await Product.findByIdAndDelete(id);

    res.json( productToDelete );
}


module.exports = {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
};