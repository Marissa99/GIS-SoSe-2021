
namespace Aufgabe2_3 {

    //Aufgabe 3
    //a)Startsteite.html und Waffel.html Datei hart gecodet und style.css 
    //b) Daten in der data.ts (canvas) und style.css
    //--> da die verschiedenen Auswahlmöglichkeiten in canvas gespeichert werden, ist die Anzahl variabel
    //c) script2.ts Datei
 
    
    let button1: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl1");
    button1.addEventListener("click", Save1);

    let button2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl2");
    button2.addEventListener("click", Save2);

    let button3: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl3");
    button3.addEventListener("click", Save3);


    function Save1 (_speichern: Event): void { 
    //console.log(_speichern); //hier würde die Auswahl in das Objekt Eis gespeichert werden
        zeigeInfos((0));
    }

    function Save2 (_speichern: Event): void { 
        //console.log(_event); //hier würde die Auswahl in das Objekt Eis gespeichert werden
        zeigeInfos((1));
    }
    function Save3 (_speichern: Event): void { 
        //console.log(_event); //hier würde die Auswahl in das Objekt Eis gespeichert werden
        zeigeInfos((2));
    }


    function zeigeInfos (_event: number): void {
    console.log("Gewählte Waffel:" + alleWaffeln[_event].farbe);
    
    }
}