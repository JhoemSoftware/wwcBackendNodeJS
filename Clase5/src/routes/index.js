const { Router } = require('express');
const path = require('path');

const router = Router();

router
    .use('/products', require('./products'))
<<<<<<< HEAD
    .use('/health', require('./health'))
    .get('/login', (_, res) => res.sendFile(path.resolve('Clase5/src/views/login.html')) )
    .get('/playground', (_, res) => res.sendFile(path.resolve('Clase5/src/views/playground.html')) );
=======
    .use('/users', require('./user'))
    .use('/health', require('./health'));
>>>>>>> 04c1d28b248ec420c23c6665aa55cde25452d199

module.exports = router;