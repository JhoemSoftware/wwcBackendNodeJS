const { response } = require('express');

const serviceGet = (_, res = response) => {
    res.json({
        "success": "El servicio en método 'GET' funciona correctamente"
    });
}

const serviceGetById = (_, res = response) => {
    res.json({
        "success": "El servicio en método 'GET BY ID' funciona correctamente"
    });
}

const servicePost = (req, res = response) => {
    const body = req.body;

    if(!body) {
        res.status(400).json({
            "warning": "El servicio en método 'POST' funciona correctamente, pero no se envió data/info"
        });

        return;
    }

    res.json({
        "success": "El servicio en método 'POST' funciona correctamente"
    });
}

const servicePatch = (req, res = response) => {
    const {id} = req.params;

    if(!id) {
        res.status(400).json({
            "warning": "El servicio en método 'PATCH' funciona correctamente, pero no se envió parámetros"
        });

        return;
    }

    res.json({
        "success": "El servicio en método 'PATCH' funciona correctamente"
    });
}

const serviceDelete = (req, res = response) => {
    const {id} = req.params;

    if(!id) {
        res.status(400).json({
            "warning": "El servicio en método 'DELETE' funciona correctamente, pero no se envió parámetros"
        });

        return;
    }

    res.json({
        "success": "El servicio en método 'DELETE' funciona correctamente"
    });
}

module.exports = {
    serviceGet,
    serviceGetById,
    servicePost,
    servicePatch,
    serviceDelete
}