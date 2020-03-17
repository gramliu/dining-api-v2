const diningURL = 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=listConcepts';


function parseBody(body) {
    request({
        uri: diningURL
    }, (err, res, body) => {
        parseBody(body);
    });
    let $ = cheerio.load(body);
    // Names
    let heads = $('.item', '#conceptColumn').html();
    console.log(heads);
}

export const getDiningTimes = (req, res) => {
    
}