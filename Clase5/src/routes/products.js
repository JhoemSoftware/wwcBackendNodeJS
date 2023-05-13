const { Router } = require('express');

const {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
} = require('../controllers/products');

const router = Router();

router.route('/')
    .get( productsGet )
    .post( productsPost );
    
router.route('/:id')
    .get( productsGetByID )
    .patch( productsPatch )
    .delete( productsDelete );

module.exports = router;