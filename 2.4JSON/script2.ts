
namespace Aufgabe2_4 {
   

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
        console.log("Ihre Auswahl:");
        console.log("Name: " + _auswahl.name);
    }   
}
    
//Funktion aus Aufgabe 2.3
    function auswahlAnzeigen (_auswahl: Waffel[]): void {
    let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("Auswahlanzeige");
    for (let i: number = 0; i < _auswahl.length; i++) {  
        let div: HTMLDivElement = waffelDiv (_auswahl[i], i);
        anzeige.appendChild(div);
        }
    }
//auswahlAnzeigen(auswahl.waffeln); noch von Aufgabe 2.3


//Aufgabe 1a):

    let meinEis: AlleAuswahlmoeglichkeiten = konvertieren();
    
    function konvertieren (): AlleAuswahlmoeglichkeiten {
        let eis: AlleAuswahlmoeglichkeiten = JSON.parse(eisJSON);
        return (eis);
}
    auswahlAnzeigen(meinEis.waffeln);
}
//Aufgabe 1b):

//Aufgabe 1c):

//Aufgabe 1d):
 