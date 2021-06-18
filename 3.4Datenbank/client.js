"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonVerschicken = document.getElementById("datenVerschicken");
    buttonVerschicken.addEventListener("click", datenAbschicken);
    //Daten abschicken um in MongoDB zu speichern
    async function datenAbschicken() {
        let formData = new FormData(document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url = "https://gissose2021mr.herokuapp.com"; //Verknüpfung mit der herokuapp
        //let url: RequestInfo = "http://localhost:8100"; //um es lokas zu testen
        url += "/datenVerschicken"; // Anhängen mit einem / daher oben keiner notwenig
        //--> motzt wegen any nicht mehr
        //tslint:disable-next-line 
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe); //string in Konsole ausgeben
    }
    let buttonAusgabe = document.getElementById("datenAusgabe");
    buttonAusgabe.addEventListener("click", datenAnzeigen);
    let rueckgabe = document.getElementById("ausgaben"); //anheften an die Seite
    //Funktion um Daten auf der Seite anzuzeigen
    async function datenAnzeigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021mr.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100"; //um es lokas zu testen
        url += "/datenAusgabe"; //Button um es auf der Seite anzueigen zu lassen
        //-->any motzt nicht mehr
        //tslint:disable-next-line 
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        rueckgabe.innerHTML = ausgabe; //Ausgabe auf der HTML Seite 
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map