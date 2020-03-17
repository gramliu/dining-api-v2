const cheerio = require('cheerio');
const request = require('request');
import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

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

routes(app);

app.get("/", function(req, res) {
    res.send("ScottyLabs CourseAPI Homepage");
});

app.listen(port, () =>
    console.log(`App listening on port ${port}.`)
);