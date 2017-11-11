"use strict";
// server.ts
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var os = require("os");
var HttpServer = /** @class */ (function () {
    function HttpServer(port) {
        this.nodePort = port;
    }
    HttpServer.prototype.onRequest = function (request, response) {
        console.log('New request: ' + request.url);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '        <meta charset="utf-8" />' +
            '        <title>Ma page Node.js !</title>' +
            '    </head>' +
            '    <body>' +
            '       <p>Voici un paragraphe <strong>HTML</strong> !</p>' +
            '    </body>' +
            '</html>');
    };
    HttpServer.prototype.onStart = function () {
        var httpServer = http.createServer(this.onRequest);
        httpServer.listen(this.nodePort);
        console.log('Server nicolas listenning on http://' + os.hostname() + ':' + this.nodePort + '/');
    };
    return HttpServer;
}());
var server = new HttpServer(8080).onStart();
