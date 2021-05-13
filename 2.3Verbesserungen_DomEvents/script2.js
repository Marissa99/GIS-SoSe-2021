"use strict";
var Aufgabe2_3Verbesserung;
(function (Aufgabe2_3Verbesserung) {
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
            console.log("Ihre Auswahl: " + _auswahl.name);
        }
    }
    function auswahlAnzeigen(_auswahl) {
        let anzeige = document.getElementById("Auswahlanzeige");
        for (let i = 0; i < _auswahl.length; i++) { //dynamische Auswahlmöglichkeiten anzeigen lassen
            let div = waffelDiv(_auswahl[i], i);
            anzeige.appendChild(div);
        }
    }
    auswahlAnzeigen(Aufgabe2_3Verbesserung.auswahl.waffeln);
})(Aufgabe2_3Verbesserung || (Aufgabe2_3Verbesserung = {}));
//# sourceMappingURL=script2.js.map