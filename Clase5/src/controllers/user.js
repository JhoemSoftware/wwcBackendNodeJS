const { response } = require('express');
// const { existsNameProduct, existsProductByID } = require('../middlewares/db-validators');

const User = require('../models/user');

/* API Rest Methods */
const usersGet = async ( _, res = response ) => {
    const users = await User.findAll();
    res.json(users);
}

const usersGetByID = async ( req, res = response ) => {
    const { id } = req.params;

    /* const product = existsProductByID(id);
    
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
        }) */
    const user = await User.findByPk(id);
    res.json(user);
}

const usersPost = async ( req, res = response ) => {
    const { name, description, price, stock, category } = req.body;

   /*  const nameProductNew = await existsNameProduct(name);

    if (!nameProductNew) {
        res.status(400).json({
            "error": `El Producto con el nombre '${name}' ya se encuentra registrado`
        });

        return;
    }

    const productNew = new Product({ name, description, price, stock, category });

    await productNew.save(); */

    const userNew = await User.create({ name, description, price, stock, category });

    res.json( userNew );
}

const usersPatch = async ( req, res = response ) => {
    const { id } = req.params;

    /* const product = existsProductByID(id);

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
    */
    
    const userEdit = await User.update(req.body, {
        returning: true,
        where: {
            id
        }
    });

    res.json(userEdit);
}

const usersDelete = async ( req, res = response ) => {
    const { id } = req.params;
    
    /* const product = existsProductByID(id);

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
        }) */

    const userDelete = await User.findByPk(id);
    userDelete.destroy(); // Revisar si es así

    res.json( userDelete );
}

module.exports = {
    usersGet,
    usersGetByID,
    usersPost,
    usersPatch,
    usersDelete
};