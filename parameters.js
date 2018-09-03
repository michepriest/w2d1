var https = require('https');                               

function getAndPrintHTML (options) {
    var buffer = ''

    /* Add your code here */
    https.get(options, function (response) {
      
        response.setEncoding('utf8');
       
        response.on('data', function (data) {
            console.log('Chunk Received. Length:', data.length);
            buffer += data;
        });

        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(buffer);
        });
    });

}
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };    


getAndPrintHTML(requestOptions);