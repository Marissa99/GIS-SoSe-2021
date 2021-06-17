"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonVerschicken = document.getElementById("datenVerschicken");
    buttonVerschicken.addEventListener("click");
    let buttonAusgabe = document.getElementById("datenAusgabe");
    buttonAusgabe.addEventListener("click", datenAnzeigen);
    async function datenAnzeigen() {
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
    async function datenAbschicken() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021mr.herokuapp.com";
        //-->any motzt nicht mehr
        //tslint:disable-next-line 
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map