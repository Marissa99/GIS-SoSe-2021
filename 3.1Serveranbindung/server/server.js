"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); //dem Port die Number
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    let server = Http.createServer(); //Port wird erstellt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        console.log(_request.url); //Serverausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
        _response.write(_request.url); // was zurückgegeben wird 
        _response.end(); //Antwort fertig und zurückgeschickt
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map