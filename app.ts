const http = require('http');
const fs = require('fs');
const path = require('path');
const host = 'localhost';
const port = 9000;
let contentFolders;
const server = http.createServer (async function(req, res)
{
   function isExist(file) {
        try {
            fs.accessSync(__dirname + file, fs.constants.F_OK);
            return true;
        }
        catch (err) {
            return false;
        }
    }

    if (req.url == "/") req.url = '/index.html';
    let exr = path.extname(req.url);
    let contentType = 'text/html';
    switch (exr) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.ts':
          contentType = 'text/typescript';
          break;
      case '.css':
          contentType = 'text/css';
          break;
      case '.json':
          contentType = 'application/json';
          break;
      case '.png':
          contentType = 'image/png';
          break;      
      case '.jpg':
          contentType = 'image/jpg';
          break;
      case '.wav':
          contentType = 'audio/wav';
          break;
    }
    
if ((await isExist(req.url) === true) && (path.extname(req.url) == "")) {
    fs.readdir(process.cwd() + req.url, (err, data) => {
    if (err) throw err;
   else {
            data.forEach(element => {
            res.write(element + "\n");
        }); 
            res.end()
        }
    });    
}
else {
   fs.readFile(process.cwd()+ req.url, function(err, data) {
    if (err) {
        fs.readFile("error.html", function(err, data) {
            if (err) {
                throw err
            }
            else{
                res.writeHead(404, {"Content-Type": contentType});
                        res.end(data);
                    }
              
        })
    }
    else {
        res.writeHead(200, {'Content-Type': contentType})
        res.end(data, 'utf-8')
        
    }
            }
    );}

});

server.listen(port);
console.log(`Server running at http://${host}:${port}`);