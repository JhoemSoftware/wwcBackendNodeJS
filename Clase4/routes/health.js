const { Router } = require('express');

const {
    serviceGet,
    serviceGetById,
    servicePost,
    servicePatch,
    serviceDelete
} = require('../controllers/health');

const router = Router();

router.get('/', serviceGet);
router.get('/', serviceGetById);
router.get('/:id', serviceGetById);
router.post('/', servicePost);
router.patch('/', servicePatch);
router.patch('/:id', servicePatch);
router.delete('/', serviceDelete);
router.delete('/:id', serviceDelete);

module.exports = router;