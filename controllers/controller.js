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

exports.listMoviesCategory = (req, res) => {
    const query = 'SELECT * FROM movies WHERE categoria=$1';
    const values = [req.params.categoria]; 

    database.query(query, values)
        .then((result) => {
            res.status(200).send({ movies: result.rows });
        })
        .catch((erro) => {
            res.status(400).send({ erro: erro.message });
        });
};

exports.accessMovie = (req, res) => {
    const query = 'INSERT INTO movies(id, nome, categoria) VALUES ($1, $2, $3)';
    const values = [req.body.id, req.body.nome, req.body.categoria]
    console.log(query);
    

    database.query(query, values).then(
        () => {
            res.status(201).send({ message: 'sucess!' })
        },
        (erro) => {
            res.status(400).send({ erro: erro })
        }
    )
}

exports.updateMovie = (req, res) => {
    const query = 'UPDATE movies SET nome=$1, categoria=$2 WHERE id=$3'
    const values = [
        req.body.nome,
        req.body.categoria,
        req.params.id
    ]

    database.query(query, values).then(
        () => {
            res.status(200).json({mensagem: "sucess"})
        },
        (erro) => {
            res.status(500).send({erro: erro})
        }
    )
}

exports.deleteMovie = (req, res) => {
    const query = ' DELETE FROM movies WHERE id=$1'
    const values = [req.params.id]

    database.query(query, values).then(
        () => {
            res.status(200).json({mensagem: "sucess"})
        },
        (erro) => {
            res.status(500).send({erro: erro})
        }
    )
}



