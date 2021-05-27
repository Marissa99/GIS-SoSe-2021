
import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT); //dem Port die Number
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); //Port wird erstellt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening"); //Konsolenausgabe
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Konsolenausgabe
        console.log(_request.url); //Serverausgabe

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
        _response.write(_request.url); // was zurückgegeben wird 
        _response.end(); //Antwort fertig und zurückgeschickt
    }
}

