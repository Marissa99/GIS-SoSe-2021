
namespace Aufgabe2_3Verbesserung {
    
    function createWaffel(_waffel: Waffel): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let image: HTMLImageElement = document.createElement ("img");
        image.src = _waffel.image;
        div.appendChild(image);

        let auswahlButton: HTMLElement = document.createElement("Button");
        let auswahlText: Text = document.createTextNode (_waffel.image);
        auswahlButton.appendChild(auswahlText); //Button und Text zusammenführen
        document.body.appendChild(auswahlButton); //Button dem Body unterordnen
        auswahlButton.addEventListener("click", waffelAuswahlSpeichern);
        auswahlButton.dataset.image = _waffel.image;
        return div;
    }
    for (let i: number = 0; i < _waffel.length; i++){
        let waffelElement: HTMLElement = createWaffel(_waffel[i]);
        document.body.appendChild(waffelElement);
        console.log (waffelElement);
    }
    
    function waffelAuswahlSpeichern(_input: MouseEvent): void {
        let ausgabe: HTMLElement = <HTMLElement>_input.target; //Das target-Attribut gibt einen Namen oder ein Schlüsselwort an, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars eingeht.
        console.log(ausgabe.dataset.image);
    }

/*
let button1: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl1");
button1.addEventListener("click", Save1);

let button2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl2");
button2.addEventListener("click", Save2);

let button3: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl3");
button3.addEventListener("click", Save3);


function Save1 (_speichern: Event): void { 
    //console.log(_speichern); //hier würde die Auswahl in Objekt Waffel und dann in das gesamte Objekt Eis gespeichert werden
        zeigeInfos((0));
    }

function Save2 (_speichern: Event): void { 
        //console.log(_speicher); //hier würde die Auswahl in das Objekt Eis gespeichert werden
        zeigeInfos((1));
    }
function Save3 (_speichern: Event): void { 
        //console.log(_speichern); //hier würde die Auswahl in das Objekt Eis gespeichert werden
        zeigeInfos((2));
    }


function zeigeInfos (_index: number): void {
    console.log("Gewählte Waffel:" + alleWaffeln[_index].farbe);
    
    }*/
}