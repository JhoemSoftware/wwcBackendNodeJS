const { Router } = require('express');
const path = require('path');

const router = Router();

router
    .use('/products', require('./products'))
    .use('/health', require('./health'))
    .get('/login', (_, res) => res.sendFile(path.resolve('Clase5/src/views/login.html')) )
    .get('/playground', (_, res) => res.sendFile(path.resolve('Clase5/src/views/playground.html')) );

module.exports = router;