var request = require('request');

function cancel(itin) { //iterate through itinerary Id's
    request({ //send cancel requests to LeisureLink API
        url: 'https://api.leisurelink.com/v1/booking/' + itin + '-1/cancel', //URL to hit
        qs: {apiKey: ''}, //Query string data
        method: 'POST',// set http VERB
        headers: {
            'Content-Type': 'application/json', //Set Content header
        },

    }, function (error, response, body) {
        if (error) {
            console.log(itin+': Error - '+error); //if error show error
        } else {
            console.log(itin+' - Response: '+response.statusCode, body);// show response of API call
        }
    });
}

module.exports = cancel;