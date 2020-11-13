const http = require('http');
const fs = require('fs');
const path = require('path');
const host = 'localhost';
const port = 9000;
let contentFolders;
const server = http.createServer (function(req, res)
{

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
 
    fs.readFile(process.cwd()+ req.url, function(err, data) {
    if (err) {
        fs.readFile("error.html", function(err, data) {
            if (err) {
                throw err
            }
            else{
                res.writeHead(200, {"Content-Type": contentType});
                        res.end(data);
                    }
              
        })
    }
    else {
        res.writeHead(200, {'Content-Type': contentType})
        res.end(data, 'utf-8')
    }
            }
    );
    
function isExist(file) {
    let fileExist;
    if (fs.access(file, fs.constants.F_OK, err => {if (err) fileExist = false;
    else fileExist = true} ))
    return fileExist;
    console.log(fileExist);
}
if ((path.extname(req.url) === "") && isExist(req.url)) {
    fs.readdir(__dirname +'/' + req.url, (err, data) => {
    if (err) throw err;
    else {data.forEach(element => {
        res.write(element)
    
        
    }); 
            res.end()}

    
});    
}
else 
{
    fs.readFile("error.html", function(err, data) {
        if (err) {
            throw err
        }
        else{
            res.writeHead(200, {"Content-Type": contentType});
                    res.end(data);
                }
          
    })
}
});



server.listen(port);
console.log(`Server running at http://${host}:${port}`);