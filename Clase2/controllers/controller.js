const { response } = require("express")

const methodGET = (req, res = response) => {
    res.json({
        message: 'Método GET Funcionando 😀'
    });
}

const methodPOST = (req, res = response) => {
    res.json({
        message: 'Método POST Funcionando 😀'
    });
}

const methodPUT = (req, res = response) => {
    res.json({
        message: 'Método PUT Funcionando 😀'
    });
}

const methodPATCH = (req, res = response) => {
    res.json({
        message: 'Método PATCH Funcionando 😀'
    });
}

const methodDELETE = (req, res = response) => {
    res.json({
        message: 'Método DELETE Funcionando 😀'
    });
}

module.exports = {
    methodGET,
    methodPOST,
    methodPUT,
    methodPATCH,
    methodDELETE
}