var https = require('https'); 

module.exports = function getHTML (options, callback) {
    /* Your code here */

        /* Add your code here */
        https.get(options, function (response) {
          
            response.setEncoding('utf8');
                var buffer = ''
            
            response.on('data', function (data) {
                buffer += data;
                console.log('Chunk Received. Length:', data.length);
            });
    
            response.on('end', function() {
                // console.log(buffer);
                // console.log('Response stream complete.');
                callback(buffer);
            });
        });
};