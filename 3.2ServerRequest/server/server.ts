
import * as Http from "http";
import * as Url from "url"; //zum Bau des Servers mit Sternchen * um sämtliche Funktionen zu imprortieren

export namespace P_3_2ServerRequest {
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT); //dem Port die Number "Hafen" geben
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); //Server/Port wird erstellt
    server.addListener("request", handleRequest); //Listener und Funktion handleRequest wird aufgerufen
    server.addListener("listening", handleListen); //Listener und Funktion handleListen wird aufgerufen
    server.listen(port); //Server hört und reagiert auf den Port und startet

    function handleListen(): void { //Funktion
        console.log("Listening"); //Konsolenausgabe Listening wenn funktion aufgerufen wird
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion 
        console.log("I hear voices!"); //Konsolenausgabe
        console.log(_request.url); //Serverausgabe Terminal mit eigener Adresse

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
       
        //Aufgabe 3.2
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandlung query in assoziatives Array
          let pathname: string = <string>url.pathname; //pathname in string speichern
          if (pathname == "/json") { //wenn ein json empfangen wird
                let jsonString: string = JSON.stringify(url.query); //wird query in string umgewandelt
                console.log(jsonString); //und in der Konsole ausgegeben
                _response.write(jsonString); // Antwort was zurückgegeben wird -->jsonString
            }
            else if (pathname == "/html") { //wenn /html in der url empfangen wird 
                for (let key in url.query) { //dann Ausgabe der Schlüssel-Wert-Paare
                    _response.write (key + ":" + url.query [key] + "<br/>"); // !!! br noch durch eine Liste ersetzen
                }
            } 
       }
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
        
    } //Ende Funktion handleRequest
} //Ende namespace

