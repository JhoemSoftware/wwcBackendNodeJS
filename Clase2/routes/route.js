const { Router } = require('express');
const {
    methodGET,
    methodGETbyID,
    methodPOST,
    methodPUT,
    methodDELETE
} = require('./../controllers/controller');

const router = Router();

router.get('/', methodGET);
router.get('/:id', methodGETbyID);
router.post('/', methodPOST);
router.put('/', methodPUT);
router.delete('/:id', methodDELETE);

module.exports = router;