const { Router } = require('express');

const {
    serviceGet,
    serviceGetById,
    servicePost,
    servicePatch,
    serviceDelete
} = require('./../controllers/health');

const router = Router();

router.route('/')
    .get( serviceGet )
    .post( servicePost )
    .patch( servicePatch )
    .delete( serviceDelete );

router.route('/:id')
    .get( serviceGetById )
    .patch( servicePatch )
    .delete( serviceDelete );

module.exports = router;