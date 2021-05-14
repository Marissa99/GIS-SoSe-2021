
namespace Aufgabe2_4 {
   

    function EisDiv (_auswahl: Eiskreation, _index: number): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add ("Eiskreation"); 

    let image: HTMLImageElement = document.createElement("img");
    image.src = _auswahl.image;
    div.appendChild(image);

    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _auswahl.name;
    div.appendChild(span);
    
    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = "auswählen";
    button.addEventListener("click", ausgewaehltKreation);
    div.appendChild(button);

    return div;

    function ausgewaehltKreation(_event: Event): void {
        console.log("Ihre Auswahl:");
        console.log("Name: " + _auswahl.name);
        //Aufgabe 1b)

        sessionStorage.setItem ("image1", _auswahl.image); //Erste Auswahlr wurde gespeichert
    }   
}
    
//Aufgabe 1c)
    function auswahlAnzeigen (_auswahl: AlleAuswahlmoeglichkeiten): void {
    let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("Auswahlanzeige");

    if (document.querySelector ("title"). getAttribute("id") == "Seite1") {
        for (let i: number = 0; i < _auswahl.waffeln.length; i++) {  
            let div: HTMLDivElement = EisDiv (_auswahl.waffeln[i], i);
            anzeige.appendChild(div);
        }
    }
    else if (document.querySelector ("title"). getAttribute("id") == "Seite2") {
        for (let i: number = 0; i < _auswahl.kugeln.length; i++) {  
            let div: HTMLDivElement = EisDiv (_auswahl.kugeln[i], i);
            anzeige.appendChild(div);
         }
    }
    else if (document.querySelector ("title"). getAttribute("id") == "Seite3") {
        for (let i: number = 0; i < _auswahl.topping.length; i++) {  
            let div: HTMLDivElement = EisDiv (_auswahl.topping[i], i);
            anzeige.appendChild(div);
         }
    }

}

//Aufgabe 1a):

    let meinEis: AlleAuswahlmoeglichkeiten = konvertieren();
    
    function konvertieren (): AlleAuswahlmoeglichkeiten {
        let eis: AlleAuswahlmoeglichkeiten = JSON.parse(eisJSON);
        return (eis);
}
    auswahlAnzeigen(meinEis); 
}

//Aufgabe 1d):
let bisherigeAuswahl: HTMLDivElement = <HTMLDivElement> document.getElementById ("bisherigeAuswahl");

if (document.querySelector ("title"). getAttribute("id") == "Seite1") {
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("image1");
    bisherigeAuswahl.appendChild(auswahlImage);
}
else if (document.querySelector ("title"). getAttribute("id") == "Seite2") {
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("image1");
    auswahlImage.src = sessionStorage.getItem("image2");
    bisherigeAuswahl.appendChild(auswahlImage);
}
else if (document.querySelector ("title"). getAttribute("id") == "Seite3") {
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("image1");
    auswahlImage.src = sessionStorage.getItem("image2");
    auswahlImage.src = sessionStorage.getItem("image3");
    bisherigeAuswahl.appendChild(auswahlImage);
 

//Aufgabe 2:
}