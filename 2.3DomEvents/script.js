"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe 1
    //Button Rechteck hinzufügen
    let buttonAdd = document.createElement("button");
    buttonAdd.style.backgroundColor = "green";
    buttonAdd.style.width = "100px";
    buttonAdd.style.height = "50px";
    buttonAdd.style.height = "absolute";
    buttonAdd.innerText = "ButtonAddRec";
    buttonAdd.addEventListener("click", addRec);
    document.body.appendChild(buttonAdd);
    function addRec(_event) {
        console.log(_event);
        let div = document.createElement("div");
        div.style.height = (Math.random() * 100).toString() + "px";
        div.style.width = (Math.random() * 100).toString() + "px";
        div.style.backgroundColor = "black";
        document.body.appendChild(div);
    }
    //Button zurücksetzen
    let buttonBack = document.createElement("button");
    buttonBack.style.backgroundColor = "red";
    buttonBack.style.width = "100px";
    buttonBack.style.height = "50px";
    buttonBack.style.height = "absolute";
    buttonBack.innerText = "ButtonBack";
    document.body.appendChild(buttonBack);
    buttonBack.addEventListener("click", RecBack);
    function RecBack(_event2) {
        console.log(_event2);
        location.href = "index.html"; //zurücksetzen auf den Anfang (mit den ersten Rechtecken)
    }
    //Zufällige Rechtecke erzeugen (hier 3 Stück) - von Anfang an
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.style.height = (Math.random() * 100).toString() + "px";
        div.style.width = (Math.random() * 100).toString() + "px";
        div.style.backgroundColor = "black";
        document.body.appendChild(div);
    }
    //Aufgabe 2
    //a) und b) interface.ts Datei
    //c) data.ts
    //d) extra Datei - Bild Übersicht
    //Aufgabe 3
    //a)
    //b)
    //c)
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map