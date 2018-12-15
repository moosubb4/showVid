const vid = require('./db/vid.json');
const axios = require('axios');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express()
const port = 8080
const hostname = '127.0.0.1';

const vidListData = '';

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
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}

const searchKey = async (key) => {
    try {
        const data = await getVideoList();
        const item = data.items.filter((e) => e.snippet.title.indexOf(key) > -1);
        // console.log("​searchKey -> item", item);
        return item;
    } catch (e) {
        console.error(e);
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


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

app.post('/search', async (req, res) => {

    const keyWord = req.body.keyWord;

    try {
        const data = await searchKey(keyWord);
        console.log("​data", data)
        res.json(data);
    } catch (e) {
        next(e)
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});