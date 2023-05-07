const { Router } = require('express');

const router = Router();

router
    .use('/products', require('./products'))
    .use('/health', require('./health'));

module.exports = router;