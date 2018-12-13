const vid = require('./db/vid.json');

const express = require('express')
const app = express()
const port = 8080
const hostname = '127.0.0.1';

app.use(function (req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/discovery', (req, res) => res.send(JSON.stringify(vid)));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});