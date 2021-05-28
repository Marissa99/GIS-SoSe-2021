"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); //dem Port die Number "Hafen" geben
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    let server = Http.createServer(); //Server/Port wird erstellt
    server.addListener("request", handleRequest); //Listener und Funktion handleRequest wird aufgerufen
    server.addListener("listening", handleListen); //Listener und Funktion handleListen wird aufgerufen
    server.listen(port); //Server hört und reagiert auf den Port und startet
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe Listening wenn funktion aufgerufen wird
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        console.log(_request.url); //Serverausgabe Terminal
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
        _response.write(_request.url); // Antwort was zurückgegeben wird -->URl
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map