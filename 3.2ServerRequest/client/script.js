"use strict";
var P_3_2ServerRequest;
(function (P_3_2ServerRequest) {
    let jsonButton = document.getElementById("JSONButton");
    jsonButton.addEventListener("click", sendDataHTML); //Eventlistener für JSON Button, aufrufen der Funktion
    let htmlButton = document.getElementById("HTMLButton");
    htmlButton.addEventListener("click", sendDataJSON); //Eventlistener für HTMl Button, aufrufen der Funktion
    let rueckgabe = document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
    async function sendDataHTML() {
        let formData = new FormData(document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url = "https://gissose2021mr.herokuapp.com/"; //Verknüpfung mit der herokuapp
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); // auf url warten
        let responseText = await response.text(); //
        rueckgabe.innerText = responseText;
    }
    async function sendDataJSON() {
        let formData = new FormData(document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url = "https://gissose2021mr.herokuapp.com/"; //Verknüpfung mit der herokuapp
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); // auf url warten
        let responseText = await response.text(); // auf textausgabe warten
        console.log(responseText); //Ausgabe json string
        let responseJson = JSON.parse(responseText); //JSOn parsen
        console.log(responseJson); // Ausgabe JSON
        rueckgabe.innerHTML = responseText;
        console.log(rueckgabe);
    }
})(P_3_2ServerRequest || (P_3_2ServerRequest = {})); //Ende namespace
//# sourceMappingURL=script.js.map