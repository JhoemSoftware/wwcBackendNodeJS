const { response } = require('express');
const Serie = require('../models/seriesModel');
const serie = new Serie();

const seriesGET = ( req, res = response ) => res.json(serie._series);

const seriesGETbyID = async ( req, res = response ) => {
    const { id } = req.params;

    const data = await serie.findSerieById(id);
    
    if(data) {
        const { name, age, gender, episodes, picture } = data;
        res.json({ name, age, gender, episodes, picture });
    } else {
        res.status(400).json({
            error: `La serie con código: ${id}, no se encuentra disponible`
        });
    }
}

module.exports = {
    seriesGET,
    seriesGETbyID
}