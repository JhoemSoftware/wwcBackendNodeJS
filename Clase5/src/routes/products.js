const { Router } = require('express');

const products = require('../controllers/products');

const router = Router();

router.route('/')
    .get( products.productsGet )
    .post( products.productsPost );
    
router.route('/:id')
    .get( products.productsGetByID )
    .patch( products.productsPatch )
    .delete( products.productsDelete );

module.exports = router;