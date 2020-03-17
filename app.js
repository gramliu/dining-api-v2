const cheerio = require('cheerio');
const request = require('request');
import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", function(req, res) {
    res.send("ScottyLabs DiningAPI Homepage");
});

app.listen(port, () =>
    console.log(`App listening on port ${port}.`)
);