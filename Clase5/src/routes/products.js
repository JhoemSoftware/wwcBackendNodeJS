const { Router } = require('express');

const {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
} = require('../controllers/');

const router = Router();

router.get('/', productsGet);
router.get('/:id', productsGetByID);
router.post('/', productsPost);
router.patch('/:id', productsPatch);
router.delete('/:id', productsDelete);

module.exports = router;