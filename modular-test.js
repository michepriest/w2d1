var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
    console.log('HELLO');
    console.log(html);
}

getHTML(requestOptions, printHTML);
console.log(getHTML); 