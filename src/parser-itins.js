var Parser = function() { //base function

};

Parser.prototype.parse = function(text) { 

	var lines = text.trim().split('\n');

    return lines; //return list of itinerary id's
};

module.exports = Parser; //define export
