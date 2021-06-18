"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let urlDBlokal = "mongodb: //localhost:27017"; //um es lokal testen zu können
    //let urlDB: string = "mongodb+srv://Testuser2:<password>@marissareiser-gis21.8i9as.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    let port = Number(process.env.PORT); //dem Port die Number "Hafen" geben
    if (!port)
        port = 8100;
    startServer(port); //Server auf dem Port starten
    //connectDatabase(urlDB); //Verbindung mit der Datenbank
    function startServer(_port) {
        let server = Http.createServer(); //erstellt Server
        console.log("Server gestartet");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    /*async function connectDatabase(_url: string): Promise<void> { //Übergabe Parameter url , Verbindung mit MongoDB
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let feedback: Mongo.Collection = mongoClient.db("3_4Abgabe").collection("Feedback");
    }*/
    async function handleRequest(_request, _response) {
        console.log("Daten angekommen"); //Überprüfung ob Daten angekommen sind
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandlung query in assoziatives Array
            let pathname = url.pathname; //pathname in string speichern
            let eingabe = { vorname: url.query.vorname + "", nachname: url.query.nachname + "", feedback: url.query.feedback + "" };
            if (pathname == "/datenVerschicken") { //wenn ein man Daten verschicken möchte
                let daten = await abspeichern(urlDBlokal, eingabe); //Funktion abspeichern aufrufen
                _response.write(daten); //Antwort zurückgeben
            }
            else if (pathname == "/datenAusgabe") {
                let antwort = await dbAuslesen(urlDBlokal);
                _response.write(JSON.stringify(antwort)); //wenn Daten abgeschickt sind und in DB speichern
            }
        }
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
    } //Ende Funktion handleRequest
    async function abspeichern(_url, _eingabe) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("3_4Abgabe").collection("Feedback"); //eigene neue Collection aufrufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB spreichern
        let antwort = "Eingespreichert";
        return antwort;
    }
    async function dbAuslesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("3_4Abgabe").collection("Feedback"); //eigene neue Collection aufrufen
        let cursor = infos.find(); //Suche der gesamten DB aber spezielle ist auch möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //auslesen der kompletten DB
        return result;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {})); //Ende namespace
//# sourceMappingURL=server.js.map