const { User } = require('./../models/user');

exports.getAllUsers = async (_, res) => {
    console.log("User -> getAllUsers");
    const users = await User.findAll();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    console.log("User -> getUserById");
    const { id } = req.params;
    const Users = await User.findByPk(id);
    res.json(Users);
};

exports.createUser = async (req, res) => {
    console.log("User -> createUser");
    const user = await new User.create(req.body);
    res.json(user);
}

exports.deleteUser = async (req, res) => {
    console.log("User -> deleteUser");
    const { id } = req.params;
    const user = User.findByPk(id);
    res.json({ message: `User ${user.firstName} ${user.lastName} has been deleted` });
};

exports.updateUser = async (req, res) => {
    console.log("User -> updateUser");
    const { id } = req.params;
    const user = await User.update(req.body, {
        returning: true,
        where: {
            id
        }
    });
    res.json(user);
};

// MI CODIGO SERÁ

const { response } = require('express');
const { existsNameProduct, existsProductByID } = require('../middlewares/db-validators');

const User = require('../models/user');

/* API Rest Methods */
const usersGet = async ( _, res = response ) => {
    // const products = await User.find();
    const users = 'GET Method USERS';
    res.json(users);
}

const usersGetByID = ( req, res = response ) => {
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
    
    const user = `Get By ID • Method ${id}`;
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

    const userNew = `Post Method User • ${name} ${description} ${price} ${stock} ${category}`;

    res.json( userNew );
}

const usersPatch = ( req, res = response ) => {
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
    
    const userEdit = `Patch Method • User ${id}`;

    res.json(userEdit);
}

const usersDelete = ( req, res = response ) => {
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

    const userDelete = `Delete method · User ${id}`

    res.json( userDelete );
}

module.exports = {
    usersGet,
    usersGetByID,
    usersPost,
    usersPatch,
    usersDelete
};