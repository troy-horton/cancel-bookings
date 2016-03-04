var fs = require('fs');
var Parser = require('./parser-itins');

function readItinFile(callback) { //read itinerary numbers from file
    fs.readFile('TM2_itineraries.txt', function (err, logData) {

        if (err) return callback(err);
        var text = logData.toString(); //read file and convert to string
        if (!text) {
            console.log('No Itineraries Found');
            return callback(null);
        } else {
            var parser = new Parser();//instantiate parser
            itinNums = parser.parse(text); //convert file to list
            console.log('Itineraries:');
            return callback(null, itinNums); //return list
        }
    });
};

module.exports = readItinFile;