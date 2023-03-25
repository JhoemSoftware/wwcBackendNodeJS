const { Router } = require('express');

const {
    productsGet,
    productsGetId
} = require('./../controllers/products');

const router = Router();

router.get('/', productsGet);
router.get('/:id', productsGetId);

module.exports = router;