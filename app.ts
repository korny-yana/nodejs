const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 9000;
let htmlFile, secondHtmlFile, cssFile, jpgFile, secondJpgFile;


fs.readFile('page/first_page.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});
fs.readFile('page/second_page.html', function(err, data) {
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
fs.readFile('img/img1.jpg', function(err, data) {
    if (err){
        throw err;
    }
    jpgFile = data;
});
fs.readFile('img/img2.jpg', function(err, data) {
    if (err){
        throw err;
    }
    secondJpgFile = data;
});

const server = http.createServer(function (req, res) {
    switch (req.url) {
        case "/style.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(cssFile);
            break;
        case "/second_page.html" :
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(secondHtmlFile);
            break;
        case "/img/img1.jpg" : 
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.write(jpgFile);
            break;
        case "/img/img2.jpg" : 
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.write(secondJpgFile);
            break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(htmlFile);
    };
    res.end();
});

server.listen(port);

console.log(`Server running at http://${host}:${port}`);