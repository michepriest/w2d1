var https = require('https');                               

function getHTML (options, callback) {

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

}

function printHTML (html) {
    console.log('HELLO');
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};    

getHTML(requestOptions, printHTML);