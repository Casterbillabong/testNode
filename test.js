var express = require('express')
var app = express();
const PORT = process.env.PORT || 8080;

app.get('/',function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});
app.listen(PORT)