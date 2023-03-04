const { response, request } = require('express')

const usuarioGet = (req = request, res = response) => {
    const {q, nombre, apikey, page = 1, limit = 1} = req.query;

    res.json({
        ok: true,
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuarioPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        ok: true,
        msg: "put API - controlador",
        id
    });
}

const usuarioPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: "post API - controlador",
        nombre,
        edad
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: "patch API - controlador"
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: "delete API - controlador"
    });
}

module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioPatch,
    usuarioDelete
}