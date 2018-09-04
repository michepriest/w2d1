var getHTML = require('./copy_http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
    var splitHTML = html.split('');
    var reverseHTML = splitHTML.reverse();
    var joinHTML = reverseHTML.join('');
 
    console.log(joinHTML);
}

getHTML(requestOptions, printReverse);