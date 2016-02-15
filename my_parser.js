var Parser = require('./parser_module');
var fs=require('fs');
var request = require('request');
var sslRootCAs = require('ssl-root-cas/latest');
sslRootCAs.inject(); //get latest ssl certs

readItinFile(function(itin_nums){
itin_nums.forEach(function(itin){ //iterate through itinerary Id's 
	console.log(itin);
	request({ //send cancel requests to LeisureLink API
	    url: 'https://api.leisurelink.com/v1/booking/'+itin+'-1/cancel', //URL to hit
	    qs: {apiKey: ''}, //Query string data
	    method: 'POST',// set http VERB
	    headers: {
		'Content-Type': 'application/json', //Set Content header
	    },

	}, function(error, response, body){
	    if(error) { 
		console.log(error); //if error show error
	    } else {
		console.log(response.statusCode, body);// show response of API call
	    }
	})
});
});

function readItinFile(callback){ //read itinerary numbers from file
fs.readFile('TM2_itineraries.txt', function(err,logData){

	if (err) throw err;
	var text = logData.toString(); //read file and convert to string
	var parser = new Parser();//instantiate parser
	itin_nums = parser.parse(text); //convert file to list
	callback(itin_nums); //return list
})
};






