const { query } = require("express")

const database = require('../dataBase/db.js')


exports.listMovies = (req, res) => {
    database.query('SELECT * FROM "public"."movies" ').then(
        (result) => {
            res.status(200).send({ movies: result.rows })
        },
        (erro) => {
            res.status(400).send({ erro: erro })
        }
    )
}


exports.accessMovie = (req, res) => {
    const query = 'INSERT INTO movies(id, nome, categoria) VALUES ($1, $2, $3)'
    const values = [req.body.id, req.body.nome, req.body.categoria]

    database.query(query, values).then(
        () => {
            res.status(201).send({ message: 'sucess!' })
        },
        (erro) => {
            res.status(400).send({ erro: erro })
        }
    )
}


