"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function EisDiv(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("Eiskreation");
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
        let span = document.createElement("span");
        span.innerText = _auswahl.name;
        div.appendChild(span);
        let button = document.createElement("button");
        button.innerText = "auswählen";
        button.addEventListener("click", ausgewaehltKreation);
        div.appendChild(button);
        if ((document.querySelector("title").getAttribute("id") == "Seite2")) {
            button.addEventListener("click", auswahlKugel);
            div.appendChild(button);
            function auswahlKugel(_event) {
                console.log("Ihre Auswahl:");
                console.log("Name: " + _auswahl.name);
                sessionStorage.setItem("image2", _auswahl.image); //Bild des ausgewählten Segels speichern 
            }
        }
        if ((document.querySelector("title").getAttribute("id") == "Seite3")) {
            button.addEventListener("click", auswahlTopping);
            div.appendChild(button);
            function auswahlTopping(_event) {
                console.log("Ihre Auswahl:");
                console.log("Name: " + _auswahl.name); //Auskunft noch als Überprüfung dringelassen 
                sessionStorage.setItem("image3", _auswahl.image); //Bild des ausgewählten Segels speichern 
            }
        }
        return div;
        function ausgewaehltKreation(_event) {
            console.log("Ihre Auswahl:");
            console.log("Name: " + _auswahl.name);
            //Aufgabe 1b)
            sessionStorage.setItem("image1", _auswahl.image); //Erste Auswahl wurde gespeichert
        }
    }
    //Aufgabe 1c) Aufrufen der verschiedenen Auswahhlen auf den verschiedenen Seiten
    function auswahlAnzeigen(_auswahl) {
        let anzeige = document.getElementById("Auswahlanzeige");
        if (document.querySelector("title").getAttribute("id") == "Seite1") {
            for (let i = 0; i < _auswahl.waffeln.length; i++) {
                let div = EisDiv(_auswahl.waffeln[i], i);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite2") {
            for (let i = 0; i < _auswahl.kugeln.length; i++) {
                let div = EisDiv(_auswahl.kugeln[i], i);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite3") {
            for (let i = 0; i < _auswahl.topping.length; i++) {
                let div = EisDiv(_auswahl.topping[i], i);
                anzeige.appendChild(div);
            }
        }
    }
    //Aufgabe 1a): JSON Sting konvertieren
    let meinEis = konvertieren();
    function konvertieren() {
        let eis = JSON.parse(Aufgabe2_4.eisJSON);
        return (eis);
    }
    auswahlAnzeigen(meinEis);
    //Aufgabe 1d):
    let bisherigeAuswahl = document.getElementById("bisherigeAuswahl");
    bisherigeAuswahl.classList.add("auswahlBisher");
    if (document.querySelector("title").getAttribute("id") == "Seite2") { //Auf der Kugelseite soll die bisherige Waffelauswahl angezeigt werden
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
    }
    else if (document.querySelector("title").getAttribute("id") == "Seite3") { //Auf der Toppingseite soll die bisherige Waffel- und Kugelauswahl angezeigt werden
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
        let auswahlImage2 = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("image2");
        bisherigeAuswahl.appendChild(auswahlImage2);
    }
    //Aufgabe 2:
    else if (document.querySelector("title").getAttribute("id") == "Seite4") { //Hier soll alles ausgewählte angezeigt werden
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
        let auswahlImage2 = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("image2");
        bisherigeAuswahl.appendChild(auswahlImage2);
        let auswahlImage3 = document.createElement("img");
        auswahlImage3.src = sessionStorage.getItem("image3");
        bisherigeAuswahl.appendChild(auswahlImage3);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {})); //Ende Namespace
//# sourceMappingURL=script2.js.map