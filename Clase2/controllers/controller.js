const { response } = require("express");

const Series = require("./../models/series");
const series = new Series();

const methodGET = ( req, res = response ) => {
    res.json( series );
}

const methodGETbyID = async (req, res = response) => {

    const { id } = req.params;

    const serieBD = await series.buscarSerie(id);

    if(!serieBD) res.status(400).json({
        error: `La serie con código #${id}, no se encuentra disponible`
    });

    res.json({
        serie: serieBD
    });
}

const methodPOST = async (req, res = response) => {

    const { name } = req.body;

    const data = await series.agregarSeries(name);

    res.json({
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
    methodGETbyID,
    methodPOST,
    methodPUT,
    methodPATCH,
    methodDELETE
}