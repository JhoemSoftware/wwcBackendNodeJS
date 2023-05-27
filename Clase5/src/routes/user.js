const { Router } = require("express");
const router = Router();

const {
    usersGet,
    usersGetByID,
    usersPost,
    usersPatch,
    usersDelete
} = require("../controllers/user");

router.route('/')
    .get( usersGet )
    .post( usersPost );

router.route('/:id')
    .get( usersGetByID )
    .patch( usersPatch )
    .delete( usersDelete );

module.exports = router;