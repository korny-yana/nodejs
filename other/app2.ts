// // const http = require('http');
// // const fs = require('fs');
// // const path = require('path');
// // const host = 'localhost';
// // const port = 9000;
// // let htmlFile, secondHtmlFile, cssFile, jpgFile, secondJpgFile;
// let contentType;

// // fs.readFile('page/first_page.html', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     htmlFile = data;
// // });
// // fs.readFile('page/second_page.html', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     secondHtmlFile = data;
// // });
// // fs.readFile('index.html', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     htmlFile = data;
// // });

// // fs.readFile('link.html', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     secondHtmlFile = data;
// // });

// // fs.readFile('style.css', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     cssFile = data;
// // });
// // fs.readFile('img/img1.jpg', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     jpgFile = data;
// // });
// // fs.readFile('img/img2.jpg', function(err, data) {
// //     if (err){
// //         throw err;
// //     }
// //     secondJpgFile = data;
// // });
// fs.readFile (process.cwd + req.url, function(err, data)
//     {
//         if (err) {
//             throw err;
//         }
//         contentType = data;
//     });
// const server = http.createServer(function (req, res) {
   
//     switch (req.url) {
//         case "/style.css" :
//             res.writeHead(200, {"Content-Type": "text/css"});
//             res.write(contentType);
//             break;
//         case "/link.html" :
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(contentType);
//             break;
//         case "/img/img1.jpg" : 
//             res.writeHead(200, {"Content-Type": "image/jpg"});
//             res.write(contentType);
//             break;
//         case "/img/img2.jpg" : 
//             res.writeHead(200, {"Content-Type": "image/jpg"});
//             res.write(contentType);
//             break;
//         default :    
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(contentType);
//     };
//     res.end();
// });
 
// const folderPath = 'page';
// console.log(fs.readdir(folderPath, (err,data) => {
//     if (err) throw err;
//     console.log(data);
// }));
// server.listen(port);

// console.log(`Server running at http://${host}:${port}`);