const { Router } = require('express');
const {
    methodGET,
    methodGETbyID,
    methodPOST,
    methodPUT,
    methodPATCH,
    methodDELETE
} = require('./../controllers/controller');

const router = Router();

router.get('/', methodGET);
router.get('/:id', methodGETbyID);
router.post('/', methodPOST);
router.put('/', methodPUT);
router.patch('/', methodPATCH);
router.delete('/', methodDELETE);

module.exports = router;