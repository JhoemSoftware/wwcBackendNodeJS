const { Router } = require('express');

const health = require('./../controllers/health');

const router = Router();

router.route('/')
    .get( health.serviceGet )
    .post( health.servicePost )
    .patch( health.servicePatch )
    .delete( health.serviceDelete )

router.route('/:id')
    .get( health.serviceGetById )
    .patch( health.servicePatch )
    .delete( health.serviceDelete )

module.exports = router;