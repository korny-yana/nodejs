const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 9000;
let htmlFile, secondHtmlFile;
let cssFile;

fs.readFile('index.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});
fs.readFile('second_page/link.html', function(err, data) {
    if (err){
        throw err;
    }
    secondHtmlFile = data;
});

fs.readFile('style.css', function(err, data) {
    if (err){
        throw err;
    }
    cssFile = data;
});

const server = http.createServer(function (req, res) {
    switch (req.url) {
        case "/style.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(cssFile);
            break;
        case "/second_page/link.html" :
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(secondHtmlFile);
            break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(htmlFile);
    };
    res.end();
});

server.listen(port);

console.log(`Server running at http://${host}:${port}`);