var net = require('net');
var fs = require('fs');

var socketClient = net.connect(2001,"127.0.0.1");
socketClient.on('data',function(donnees){
    //var monFichierHandle = fs.appendFileSync("./MonVideo.mp4",donnees,function(err){
        throw err;
        console.log(BinaryToString(donnees));
    });
    console.log(socketClient.bytesRead);
});