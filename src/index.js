var readItinFile = require('./read-itin-file');
var sslRootCAs = require('ssl-root-cas/latest');
var cancel = require('./requests-ll-api');
sslRootCAs.inject(); //get latest ssl certs

readItinFile(function(err, itinNums){
    if(err) throw err;

    if(itinNums){
        itinNums.forEach(function(itin){
            cancel(itin);
        });
    }
});