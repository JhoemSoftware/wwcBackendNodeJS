const { Router } = require('express');

const {
    seriesGET,
    seriesGETbyID
} = require('../controllers/seriesController');

const router = Router();

router.get('/', seriesGET);
router.get('/:id', seriesGETbyID);
// router.post('/', productsPost);
// router.put('/:id', productsPut);
// router.delete('/:id');

module.exports = router;