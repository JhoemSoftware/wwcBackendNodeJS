const { Router } = require('express');

const {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
} = require('../controllers/products');

const router = Router();

router.get('/',);

// const { healthCheck, welcomePage } = require('./../controllers/');

/* router
    // .get('/', serviceGet)
    .get('/health', serviceGet)
    .use('/products', require('./products'))
    .use('/users', require('./user'));
 */
module.exports = router;