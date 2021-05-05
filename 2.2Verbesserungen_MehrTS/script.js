"use strict";
var Aufgabe2_2Verbesserungen;
(function (Aufgabe2_2Verbesserungen) {
    //Aufgabe 1. c):
    console.log("Aufgabe 1. c)");
    let s1 = { name: "Müller", vorname: "Max", alter: 22, matrikel: 123456 };
    let s2 = { name: "Maier", vorname: "Tim", alter: 29, matrikel: 674598 };
    let s3 = { name: "Becker", vorname: "Sarah", alter: 20, matrikel: 976856 };
    let studiArray = [s1, s2, s3, { name: "Alber", vorname: "Marie", alter: 18, matrikel: 983454 }];
    console.log(studiArray[0].name, studiArray[1].vorname, studiArray[2].alter, studiArray[3].matrikel); //Ausgabe einiger Attribute
    for (let i = 0; i < studiArray.length; i++) { //geht das Array durch
        console.log("Zeige Infos:");
        showInfo(studiArray[i].vorname, studiArray[i].name, studiArray[i].alter, studiArray[i].matrikel); //ruft Funktion auf und gibt die Stellen des Arrays ein
    }
    function showInfo(_vorname, _name, _alter, _matrikel) {
        console.log(_name);
        console.log(_vorname);
        console.log(_alter);
        console.log(_matrikel);
    }
    //Aufgabe 1. c) 5.:
    console.log("Aufgabe 1. c) 5.");
    class Student2 {
        constructor(_name, _vorname, _alter, _matrikel) {
            this.name = _name;
            this.vorname = _vorname;
            this.alter = _alter;
            this.matrikel = _matrikel;
        }
        showInfo() {
            console.log(this.name, this.vorname, this.alter, this.matrikel);
        }
    }
    let studi = new Student2("Kraus", "Melanie", 23, 456637); //neuer Student und die Übergabeparameter direkt in die Klammern
    studi.showInfo();
    //Aufgabe 2 a):
    let numberArray = [2, 5, 10, 13, 20];
    console.log("Aufgabe 2. a) - normal"); //ohne reverse Methode
    console.log(backwards(numberArray));
    function backwards(_arr) {
        let back = []; //leeres Array
        for (let i = _arr.length - 1; i >= 0; i--) {
            back.push(_arr[i]); //stelle i in neues Array hinzufügen
        }
        return back;
    }
})(Aufgabe2_2Verbesserungen || (Aufgabe2_2Verbesserungen = {}));
//# sourceMappingURL=script.js.map