const { Router } = require('express');
const {
    methodGET,
    methodPOST,
    methodPUT,
    methodPATCH,
    methodDELETE
} = require('./../controllers/controller');

const router = Router();

router.get('/', methodGET);
router.post('/', methodPOST);
router.put('/', methodPUT);
router.patch('/', methodPATCH);
router.delete('/', methodDELETE);

module.exports = router;