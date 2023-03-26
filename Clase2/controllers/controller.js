const { response, json } = require("express");

const Series = require("./../models/series");
const series = new Series();

const methodGET = ( req, res = response ) => res.json( series.series );

const methodGETbyID = async (req, res = response) => {
    const { id } = req.params;

    const serie = await series.buscarSerie(id);

    if(!serie) res.status(400).json({
        error: `La serie con código #${id}, no se encuentra disponible`
    });

    res.json( serie );
}

const methodPOST = async (req, res = response) => {
    const { name } = req.body;

    const serie = await series.agregarSeries(name);

    if(!serie) res.status(400).json({
        error: `La serie: ${name}, ya se encuentra registrada`
    })

    res.json( serie );
}

const methodPUT = async (req, res = response) => {
    const { id, name } = req.body;

    const serie = await series.editarSerie(id, name);

    if(!serie) res.status(400).json({
        error: `La serie con código: ${id}, no se encuentra disponible. Por lo cual no es posible asignarle el nombre de: ${name}`
    });

    res.json( serie );
}

const methodDELETE = async (req, res = response) => {
    const { id } = req.params;

    const result = await series.eliminarSerie(id);

    if(!result) res.status(400).json({
        error: "La serie solicitada a eliminar, no se encuentra disponible"
    });

    res.json({
        message: `La serie con código ${id}, ha sido eliminada correctamente`
    });
}

module.exports = {
    methodGET,
    methodGETbyID,
    methodPOST,
    methodPUT,
    methodDELETE
}