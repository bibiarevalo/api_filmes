const pg = require('pg')

const conection = new pg.Client('postgres://xeolgvdp:Hw7mvuFRn3rSUC10V7KgIK78YBEv4NKX@isabelle.db.elephantsql.com/xeolgvdp')

try {
     conection.connect()
    console.log('connected database')
} catch (erro) {
    console.log('Error connecting to database')
    console.log(erro)
}

 module.exports = conection