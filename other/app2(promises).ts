const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 1000;
let indexFile;

const requestListener = function (req, res) {
    switch (req.url) {
        case "/": fs.readFile(__dirname+'/index.html')
    .then(contents => {
        indexFile = contents;
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(indexFile);})
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        console.log("error");
        return; 
    });
    case "/style.css": 
    fs.readFile(__dirname+'/style.css')
    .then(contents => {
        indexFile = contents;
        res.setHeader("Content-Type", "text/css");
        res.writeHead(200);
        res.end(contents,"utf-8");})
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        console.log("error");
        return; 
    });
    }
};
 
const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

