var http = require('http');
const PORT = process.env.PORT ||8080;
var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
});
server.listen(8080);