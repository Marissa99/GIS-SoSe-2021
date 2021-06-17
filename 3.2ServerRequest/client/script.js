"use strict";
var P_3_2ServerRequest;
(function (P_3_2ServerRequest) {
    let jsonButton = document.getElementById("JSONButton");
    jsonButton.addEventListener("click", sendDataJSON); //Eventlistener für JSON Button, aufrufen der Funktion
    let htmlButton = document.getElementById("HTMLButton");
    htmlButton.addEventListener("click", sendDataHTML); //Eventlistener für HTMl Button, aufrufen der Funktion
    let rueckgabe = document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
    async function sendDataHTML() {
        let formData = new FormData(document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url = "https://gissose2021mr.herokuapp.com"; //Verknüpfung mit der herokuapp
        //let url: RequestInfo = "http://localhost:8100"; um es lokas zu testen
        url += "/html"; // Anhängen mit einem / daher oben keiner notwenig
        //-->any motzt nicht mehr
        //tslint:disable-next-line 
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); // auf url warten
        let responseText = await response.text();
        rueckgabe.innerHTML = responseText;
    }
    async function sendDataJSON() {
        let formData = new FormData(document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url = "https://gissose2021mr.herokuapp.com"; //Verknüpfung mit der herokuapp
        //let url: RequestInfo = "http://localhost:8100"; um es lokas zu testen
        url += "/json";
        //-->any motzt nicht mehr
        //tslint:disable-next-line 
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); // auf url warten
        let objektJson = await response.json(); // neues Objekt von Interface Ausgabe
        console.log(objektJson); //Ausgabe json string
        rueckgabe.innerHTML = objektJson.vorname; // Ausgabe Vorname auf HTML Seite zur Überprüfung
        console.log(rueckgabe);
    }
})(P_3_2ServerRequest || (P_3_2ServerRequest = {})); //Ende namespace
//# sourceMappingURL=script.js.map