var readItinFile = require('./read-itin-file');
var sslRootCAs = require('ssl-root-cas/latest');
var cancel = require('./requests-ll-api');
sslRootCAs.inject(); //get latest ssl certs

readItinFile(function(err, itin_nums){
    if(err) throw err;

    if(itin_nums){
        itin_nums.forEach(function(itin){
            cancel(itin);
        });
    }
});

