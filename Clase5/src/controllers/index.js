const {
    productsGet,
    productsGetByID,
    productsPost,
    productsPatch,
    productsDelete
} = require('./products');

const {
    serviceGet,
    serviceGetById,
    servicePost,
    servicePatch,
    serviceDelete
} = require('./health');

module.exports = {
    productsGet
}