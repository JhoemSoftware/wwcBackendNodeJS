const { Router } = require('express');
const { check } = require('express-validator');
const { existsProductByID } = require('../helpers/db-validators');
const { validatorFields } = require('../middlewares/validator-fields');

const {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
} = require('../controllers/controller');

const router = Router();

router.get('/', productsGet);
router.get('/:id', productsGetByID);
router.post('/', productsPost);
router.patch('/:id', productsPatch);
router.delete('/:id', productsDelete);

module.exports = router;