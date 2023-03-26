const { Router } = require('express');

const {
    seriesGET
} = require('../controllers/seriesController');

const router = Router();

router.get('/', seriesGET);
// router.get('/:id', productsGetId);
// router.post('/', productsPost);
// router.put('/:id', productsPut);
// router.delete('/:id');

module.exports = router;