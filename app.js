const cheerio = require('cheerio');
const request = require('request');
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const diningURL = 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=listConcepts';

request({
    uri: diningURL
}, (err, res, body) => {
    parseBody(body);
});

function parseBody(body) {
    let $ = cheerio.load(body);
    // Names
    let heads = $('.item', '#conceptColumn').html();
    console.log(heads);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());