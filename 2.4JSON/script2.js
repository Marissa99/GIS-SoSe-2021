"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let meinEis = konvertieren();
    function waffelDiv(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("waffel"); //div haben alle die Klasse "waffel"
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
        let span = document.createElement("span");
        span.innerText = _auswahl.name;
        div.appendChild(span);
        let button = document.createElement("button");
        button.innerText = "Wahl";
        button.addEventListener("click", ausgewaehlt);
        div.appendChild(button);
        return div;
        function ausgewaehlt(_event) {
            console.log("Ihre Auswahl:");
            console.log("Name: " + _auswahl.name);
        }
    }
    //Funktion aus Aufgabe 2.3
    function auswahlAnzeigen(_auswahl) {
        let anzeige = document.getElementById("Auswahlanzeige");
        for (let i = 0; i < _auswahl.length; i++) {
            let div = waffelDiv(_auswahl[i], i);
            anzeige.appendChild(div);
        }
    }
    //auswahlAnzeigen(auswahl.waffeln);
    //Aufgabe 1a):
    function konvertieren() {
        meinEis = JSON.parse(Aufgabe2_4.eisJSON);
        return meinEis;
    }
    auswahlAnzeigen(meinEis.waffeln);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script2.js.map