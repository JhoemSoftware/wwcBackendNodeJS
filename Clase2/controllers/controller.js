const { response } = require("express");
const series = require('./../models/series');

const methodGET = (req, res = response) => {
    res.json({
        message: 'Método GET Funcionando 😀',
        series
    });
}

const methodPOST = (req, res = response) => {

    const ultimoRegistro = (series[series.length - 1].id) + 1;
    const { name } = req.body;

    const data = {
        id: ultimoRegistro,
        name
    }

    series.push(data);

    res.json({
        message: 'Método POST Funcionando 😀',
        data
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