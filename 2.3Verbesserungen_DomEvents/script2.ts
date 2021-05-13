namespace Aufgabe2_3Verbesserung {

function waffelDiv (_auswahl: Waffel, _index: number): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add ("waffel"); //div haben alle die Klasse "waffel"

    let image: HTMLImageElement = document.createElement("img");
    image.src = _auswahl.image;
    div.appendChild(image);

    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _auswahl.name;
    div.appendChild(span);
    
    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = "Wahl";
    button.addEventListener("click", ausgewaehlt);
    div.appendChild(button);

    return div;

    function ausgewaehlt(_event: Event): void {
        console.log("Ihre Auswahl: " + _auswahl.name);
    }   
}
    
function auswahlAnzeigen (_auswahl: Waffel[]): void {
    let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("Auswahlanzeige");
    for (let i: number = 0; i < _auswahl.length; i++) {  //dynamische Auswahlmöglichkeiten anzeigen lassen
        let div: HTMLDivElement = waffelDiv (_auswahl[i], i);
        anzeige.appendChild(div);
        }
    }

auswahlAnzeigen(auswahl.waffeln);

}
