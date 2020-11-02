const http = require('http');
const fs = require('fs').promises;
const hostname = 'localhost';
const port = 1000;

const requestListener = function (req, res) {
    fs.readFile(__dirname+'/index.html')
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);})
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return; 
    });
};

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
