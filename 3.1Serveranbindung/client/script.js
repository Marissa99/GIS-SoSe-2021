"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    //Teilaufgabe 2
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("name: " + entry[0]);
        }
        let query = new URLSearchParams(formData);
        let _url = "https://gissose-2021mr.herokuapp.com";
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response = await fetch(_url); // auf url warten
        let antwort = await response.text();
        console.log(antwort);
        let rueckgabe = document.getElementById("serverausgabe");
        rueckgabe.innerText = antwort;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", sendData);
})(P_3_1Server || (P_3_1Server = {})); //Ende namespace
//# sourceMappingURL=script.js.map