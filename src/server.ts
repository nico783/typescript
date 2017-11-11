// server.ts

import http = require('http');
import os = require('os');

class HttpServer {
    nodePort: number;
    
    constructor (port: number) {
        this.nodePort = port;
    }
    
    onRequest(request: http.ServerRequest, response: http.ServerResponse) {
        console.log('New request: ' + request.url);

        response.writeHead(200, {"Content-Type": "text/html"})
        response.end('<!DOCTYPE html>'+
            '<html>'+
            '    <head>'+
            '        <meta charset="utf-8" />'+
            '        <title>Ma page Node.js !</title>'+
            '    </head>'+
            '    <body>'+
            '       <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
            '    </body>'+
            '</html>')
    }
    
    onStart() {
        let httpServer = http.createServer(this.onRequest);
        httpServer.listen(this.nodePort);
        console.log('Server nicolas listenning on http://' + os.hostname() + ':' + this.nodePort + '/');
    }
}

let server = new HttpServer(8080).onStart();
