const http = require('http');
const fs = require('fs');
const path = require('path');
const host = 'localhost';
const port = 9000;

const server = http.createServer (function(req,res)
{
    let exr = path.extname(req.url);
    console.log("Hello world");
    let contentType = 'text/html';
    switch (exr) {
        case '.js':
          contentType = 'text/javascript';
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
    
    fs.readFile(process.cwd + req.url, function(err, data) {
    if (err) {
        fs.readFile("error.html", function(err, data) {
            if (err) {
                throw err
            }
            else{
                res.writeHead(200, {"Content-Type": "text/html"});
                        res.write(data);}
              
        })
        // throw err;
    }
    else {
        switch (req.url) {
                    // case "/style.css" :
                    //     res.writeHead(200, {"Content-Type": contentType});
                    //     res.write(contentType);
                    //     break;
                    // case "/link.html" :
                    //     res.writeHead(200, {"Content-Type": contentType});
                    //     res.write(contentType);
                    //     break;
                    // case "/img/img1.jpg" : 
                    //     res.writeHead(200, {"Content-Type": contentType});
                    //     res.write(contentType);
                    //     break;
                    // case "/img/img2.jpg" : 
                    //     res.writeHead(200, {"Content-Type": contentType});
                    //     res.write(contentType);
                    //     break;
                    // default :    
                    //     res.writeHead(200, {"Content-Type": contentType});
                    //     res.write(contentType);
                };
                res.end();
            }
    });
});
server.listen(port);
console.log(`Server running at http://${host}:${port}`);