
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
    div.appendChild(button);
    
    //hätte zusammengefasst werden können, indem man entwerder eine Funktion einfügt oder man mit einer for-Schleife durchgeht
    if ((document.querySelector("title").getAttribute("id") == "Seite1" )) {
        button.addEventListener("click", auswahlWaffel); //Entschiedung, wann welche Funktion bzw. Seite aufgerufen wird
    }

    if ((document.querySelector("title").getAttribute("id") == "Seite2" )) {
        button.addEventListener("click", auswahlKugel); //Entschiedung, wann welche Funktion bzw. Seite aufgerufen wird
    }

    if ((document.querySelector("title").getAttribute("id") == "Seite3" )) {
        button.addEventListener("click", auswahlTopping); //Entschiedung, wann welche Funktion bzw. Seite aufgerufen wird
    }
    
    return div;
 //hätte zusammengefasst werden können, indem man nue eine Funktion hat und hier Übergabeparameter verwendet
    function auswahlWaffel(_event: Event): void {
        console.log("Ihre Auswahl:");
        console.log("Name: " + _auswahl.name); //Auskunft noch als Überprüfung dringelassen 
        sessionStorage.setItem("image1", _auswahl.image); 
        location.href = "indexKugel.html"; //direktes weiterleiten zur nächsten Seite
    }
    function auswahlKugel(_event: Event): void {
        console.log("Ihre Auswahl:");
        console.log("Name: " + _auswahl.name);
        sessionStorage.setItem("image2", _auswahl.image);
        location.href = "indexTopping.html";
    }
    function auswahlTopping(_event: Event): void {
        console.log("Ihre Auswahl:");
        console.log("Name: " + _auswahl.name); 
        sessionStorage.setItem("image3", _auswahl.image);  
        location.href = "indexEisGesamt.html";
    }
}
    
//Aufgabe 1c) Aufrufen der verschiedenen Auswahhlen auf den verschiedenen Seiten
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

//Aufgabe 1a): JSON Sting konvertieren

    let meinEis: AlleAuswahlmoeglichkeiten = konvertieren();
    
    function konvertieren (): AlleAuswahlmoeglichkeiten {
        let eis: AlleAuswahlmoeglichkeiten = JSON.parse(eisJSON);
        return (eis);
    }
    auswahlAnzeigen(meinEis); 


//Aufgabe 1d):
    let bisherigeAuswahl: HTMLDivElement = <HTMLDivElement> document.getElementById ("bisherigeAuswahl");
    bisherigeAuswahl.classList.add("auswahlBisher");
   
    if (document.querySelector ("title").getAttribute("id") == "Seite2") { //Auf der Kugelseite soll die bisherige Waffelauswahl angezeigt werden
        let auswahlImage: HTMLImageElement = document.createElement ("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
    }
    else if (document.querySelector ("title"). getAttribute("id") == "Seite3") { //Auf der Toppingseite soll die bisherige Waffel- und Kugelauswahl angezeigt werden
        let auswahlImage: HTMLImageElement = document.createElement ("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
        let auswahlImage2: HTMLImageElement = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("image2");
        bisherigeAuswahl.appendChild(auswahlImage2);
    }
//Aufgabe 2:
//Da ich das Eis nicht wirklich "zusammenbauen" kann, wird hier die Auswahl in Bildern mit Lücken dargestellt 
    else if (document.querySelector ("title"). getAttribute("id") == "Seite4") { //Hier soll alles ausgewählte angezeigt werden
        let auswahlImage: HTMLImageElement = document.createElement ("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
        let auswahlImage2: HTMLImageElement = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("image2");
        bisherigeAuswahl.appendChild(auswahlImage2);
        let auswahlImage3: HTMLImageElement = document.createElement("img");
        auswahlImage3.src = sessionStorage.getItem("image3");
        bisherigeAuswahl.appendChild(auswahlImage3);
    }

    
}//Ende Namespace