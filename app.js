const cheerio = require('cheerio');
const request = require('request');

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