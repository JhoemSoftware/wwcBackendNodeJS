const { Router } = require('express');

const {
    productsGet,
    productsGetId,
    productsPost,
    productsPut,
    productsDelete
} = require('./../controllers/products');

const router = Router();

router.get('/', productsGet);
router.get('/:id', productsGetId);
router.post('/', productsPost);
router.put('/:id', productsPut);
router.delete('/:id');

module.exports = router;