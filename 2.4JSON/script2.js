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
        return div;
        function ausgewaehltKreation(_event) {
            console.log("Ihre Auswahl:");
            console.log("Name: " + _auswahl.name);
            //Aufgabe 1b)
            sessionStorage.setItem("image", _auswahl.image); //Erste Auswahl wurde gespeichert
        }
    }
    //Aufgabe 1c)
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
    //Aufgabe 1a):
    let meinEis = konvertieren();
    function konvertieren() {
        let eis = JSON.parse(Aufgabe2_4.eisJSON);
        return (eis);
    }
    auswahlAnzeigen(meinEis);
    //Aufgabe 1d):
    let bisherigeAuswahl = document.getElementById("bisherigeAuswahl");
    /*if (document.querySelector ("title"). getAttribute("id") == "Seite1") {
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("image");
    bisherigeAuswahl.appendChild(auswahlImage);
    }*/
    if (document.querySelector("title").getAttribute("id") == "Seite2") {
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image");
        bisherigeAuswahl.appendChild(auswahlImage);
    }
    else if (document.querySelector("title").getAttribute("id") == "Seite3") {
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image");
        auswahlImage.src = sessionStorage.getItem("image");
        auswahlImage.src = sessionStorage.getItem("image");
        bisherigeAuswahl.appendChild(auswahlImage);
    }
    //Aufgabe 2:
    else if (document.querySelector("title").getAttribute("id") == "Seite4") {
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image");
        auswahlImage.src = sessionStorage.getItem("image");
        auswahlImage.src = sessionStorage.getItem("image");
        bisherigeAuswahl.appendChild(auswahlImage);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {})); //Ende Namespace
//# sourceMappingURL=script2.js.map