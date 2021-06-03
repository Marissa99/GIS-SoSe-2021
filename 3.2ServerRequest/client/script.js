"use strict";
var P_3_2ServerRequest;
(function (P_3_2ServerRequest) {
    //Teilaufgabe 2
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name")); //Konsolenausgabe
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]); ///Konsolenausgabe Eingang Stelle 0
            console.log("name: " + entry[1]); //Konsolenausgabe
        }
        let query = new URLSearchParams(formData);
        let _url = "https://gissose2021mr.herokuapp.com/"; //Verknüpfung mit der herokuapp
        _url = _url + "?" + query.toString(); //Url in String umwandeln
        console.log(_url); //Konsolenausgabe
        let response = await fetch(_url); // auf url warten
        let antwort = await response.text(); //Auf die antwort warten
        console.log(antwort);
        let rueckgabe = document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", sendData); //Button um Funktion aufzurufen
})(P_3_2ServerRequest || (P_3_2ServerRequest = {})); //Ende namespace
//# sourceMappingURL=script.js.map