"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2ServerRequest = void 0;
const Http = require("http");
const Url = require("url"); //zum Bau des Servers mit Sternchen * um sämtliche Funktionen zu imprortieren
var P_3_2ServerRequest;
(function (P_3_2ServerRequest) {
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
        console.log(_request.url); //Serverausgabe Terminal mit eigener Adresse
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
        //Aufgabe 3.2
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandlung query in assoziatives Array
            let pathname = url.pathname; //pathname in string speichern
            if (pathname == "/json") { //wenn ein json empfangen wird
                let jsonString = JSON.stringify(url.query); //wird query in string umgewandelt
                console.log(jsonString); //und in der Konsole ausgegeben
                _response.write(jsonString); // Antwort was zurückgegeben wird -->jsonString
            }
            else if (pathname == "/html") { //wenn /html in der url empfangen wird 
                for (let key in url.query) { //dann Ausgabe der Schlüssel-Wert-Paare
                    _response.write(key + ":" + url.query[key] + "<br/>"); // !!! br noch durch eine Liste ersetzen
                }
            }
        }
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
    } //Ende Funktion handleRequest
})(P_3_2ServerRequest = exports.P_3_2ServerRequest || (exports.P_3_2ServerRequest = {})); //Ende namespace
//# sourceMappingURL=server.js.map