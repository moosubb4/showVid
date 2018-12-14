const vid = require('./db/vid.json');
const axios = require('axios');
const express = require('express');
const https = require('https');

const app = express()
const port = 8080
const hostname = '127.0.0.1';

const instance = axios.create({
    baseURL: 'https://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json',
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});

const getVideoList = async () => {
    try {
        const response = await instance.get();
        const data = JSON.stringify(response.data);
        // console.log(data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



app.use(function (req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/discovery', async (req, res) => {
    try {
        const data = await getVideoList();
        res.json(data);
    } catch (e) {
        next(e)
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});