const { Router } = require('express');

const {
    productsGet
} = require('../controllers/products');

const router = Router();

router.get('/', productsGet);
// router.get('/:id', seriesGETbyID);
// router.post('/', productsPost);
// router.put('/:id', productsPut);
// router.delete('/:id');

module.exports = router;