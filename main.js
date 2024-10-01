const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router'); 

app.use(bodyParser.json());

app.use('/movies', router);

app.listen(3000, () => console.log('OK'));

module.exports = app 