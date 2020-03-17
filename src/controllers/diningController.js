const request = require('request');
const cheerio = require('cheerio');
import { DiningLocation, Hours } from '../models/diningLocation';

const diningURL = 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=listConceptsGrid';

async function getContents() {
    return new Promise(function(resolve, reject) {
        request.get({url: diningURL, method: 'GET'}, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    })
}

function parseContents(html) {
    let $ = cheerio.load(html);
    // Names
    let locations = [];
    let heads = $('.item a ', '#conceptColumn').each((i, element) => {
        let name = element.children[0].data;
        let location = new DiningLocation(name);
        locations.push(location);
    });
    console.log(locations);
    return locations;
}

export const getDiningTimes = async (req, res) => {
    let html = await getContents();
    console.log("Got html");
    parseContents(html);
    res.write("Done");
}