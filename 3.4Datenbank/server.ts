import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

let port: number = Number(process.env.PORT); //dem Port die Number "Hafen" geben
if (!port)
    port = 8100;

startServer(port);

function startServer (_port: number | string): void {
    let server: Http.Server = Http. createServer();
    server.addListener("request", handleRequest);
    server.listen(_port);

    }
async function connectDatabase(): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    mongoCollection = mongoClient.db("Test").collection("Students");
    }

}
