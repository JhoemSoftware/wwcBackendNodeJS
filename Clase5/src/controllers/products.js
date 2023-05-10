const { response } = require('express');
const { existsNameProduct, existsProductByID } = require('../middlewares/db-validators');

const Product = require('../models/product');

/* API Rest Methods */
const productsGet = async ( _, res = response ) => {
    const products = await Product.find();

    res.json(products);
}

const productsGetByID = ( req, res = response ) => {
    const { id } = req.params;

    const product = existsProductByID(id);
    
    product
        .then((product) => {
            if (!product) {
                res.status(400).json({
                    "error": `El Producto con el código '${id}' no se encuentra disponible`
                });

                return;
            }

            res.json({ product })
        })
        .catch(() => {
            res.status(400).json({
                "error": `El Producto con el código '${id}' no se encuentra disponible`
            });

            return;
        })
}

const productsPost = async ( req, res = response ) => {
    const { name, description, price, stock, category } = req.body;

    const nameProductNew = await existsNameProduct(name);

    if (!nameProductNew) {
        res.status(400).json({
            "error": `El Producto con el nombre '${name}' ya se encuentra registrado`
        });

        return;
    }

    const productNew = new Product({ name, description, price, stock, category });

    await productNew.save();

    res.json( productNew );
}

const productsPatch = ( req, res = response ) => {
    const { id } = req.params;

    const product = existsProductByID(id);

    product
    .then(async (product) => {
        if (!product) {
            res.status(400).json({
                "error": `El Producto con el código '${id}' no se encuentra disponible`
            });

            return;
        }

        const { description, price, stock, category } = req.body;
    
        const data = { description, price, stock, category }
    
        const productToUpdate = await Product.findByIdAndUpdate(id, data);
    
        res.json({
            "success": `El producto '${productToUpdate.name}' ha sido Actualizado`
        });
    })
    .catch(() => {
        res.status(400).json({
            "error": `El Producto con el código '${id}' no se encuentra disponible`
        });

        return;
    })

}

const productsDelete = ( req, res = response ) => {
    const { id } = req.params;
    
    const product = existsProductByID(id);

    product
        .then(async ({ id, name }) => {
            await Product.findByIdAndDelete(id);

            res.json({
                "success": `El producto '${name}' ha sido eliminado`
            });
        })
        .catch(() => {
            res.status(400).json({
                "error": `El Producto con el código '${id}' no se encuentra disponible`
            });

            return;
        })
}

module.exports = {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
};