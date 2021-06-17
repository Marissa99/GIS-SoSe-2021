"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let port = Number(process.env.PORT); //dem Port die Number "Hafen" geben
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.listen(_port);
    }
    async function connectDatabase() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test").collection("Students");
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map