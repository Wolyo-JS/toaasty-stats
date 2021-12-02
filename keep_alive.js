var http = require('http'); 

http.createServer(function (req, res) {
res.write("wolyo <31");
res.end();
}).listen(8080);
