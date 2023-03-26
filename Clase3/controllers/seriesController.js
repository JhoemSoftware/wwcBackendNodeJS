const { response } = require('express');
const Serie = require('../models/seriesModel');
const series = new Serie();

const seriesGET = ( req, res = response ) => {
    res.json(series)
}

module.exports = {
    seriesGET
}