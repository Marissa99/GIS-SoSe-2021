"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    //Aufgabe 1. a):
    console.log("Aufgabe 1. a)");
    console.log(min(1, 4, 6, 8)); //Übergabeparameter eingeben
    function min(...zahlen) {
        let minimum;
        for (let i = 0; i < zahlen.length; i++) {
            if (i === 0) { //prüfen ob i Null ist
                minimum = zahlen[i];
            }
            else if (zahlen[i] < minimum) {
                minimum = zahlen[i];
            }
        }
        return minimum;
    }
    //Aufgabe 1. b):
    console.log("Aufgabe 1. b)");
    function isEven(zahl) {
        if (zahl == 0) {
            return true;
        }
        else if (zahl == 1) {
            return false;
        }
        else if (zahl < 0) { // wenn man ohne diese Funktion -1 eingibt kommt ein Erroe:Maximum call stack -> geht bis ins Unendliche
            return isEven(-zahl); //Vorzeichenwechsel zu positiv
        }
        else {
            return isEven(zahl - 2);
        }
    }
    console.log(isEven(-1)); //Zahl die überprüft werden soll
    //Aufgabe 1. c):
    console.log("Aufgabe 1. c)");
    let s1 = { name: "Müller", vorname: "Max", alter: 22, matrikel: 123456 };
    let s2 = { name: "Maier", vorname: "Tim", alter: 29, matrikel: 674598 };
    let s3 = { name: "Becker", vorname: "Sarah", alter: 20, matrikel: 976856 };
    let studiArray = [s1, s2, s3, { name: "Alber", vorname: "Marie", alter: 18, matrikel: 983454 }];
    console.log(studiArray[0].name, studiArray[1].vorname, studiArray[2].alter, studiArray[3].matrikel);
    function showInfo(vorname) {
        let auskunft;
        if (vorname == "Max") {
            auskunft = s1;
        }
        if (vorname == "Tim") {
            auskunft = s2;
        }
        if (vorname == "Sarah") {
            auskunft = s3;
        }
        else {
            console.log("Gibt es nicht.");
        }
        console.log("Name: " + auskunft.name + ", Vorname: " + auskunft.vorname);
    }
    showInfo("Max");
    //Aufgabe 1. c) 5.:
    console.log("Aufgabe 1. c) 5.");
    class Student2 {
        createStudent2(_name, _vorname, _alter, _matrikel) {
            this.name = _name;
            this.vorname = _vorname;
            this.alter = _alter;
            this.matrikel = _matrikel;
        }
        showInfo() {
            console.log("Name: " + this.name + ", Vorname: " + this.vorname);
        }
    }
    let studi = new Student2(); //neuer Student
    studi.createStudent2("Kraus", "Melanie", 23, 456637); //um Ihn zu kreieren muss man zuerst in den studi
    studi.showInfo();
    //Aufgabe 2 a):
    let numberArray = [2, 5, 10, 13, 20];
    let numberArray2 = [1, 4, 8, 15];
    console.log("Aufgabe 2. a)");
    console.log("Aufgabe 2. a) - reverse"); //einfachere Funktion
    function backwards2() {
        numberArray.reverse();
    }
    console.log(numberArray.reverse());
    backwards2();
    console.log("Aufgabe 2. a) - normal"); //ohne reverse Methode
    console.log(backwards(numberArray));
    function backwards(_arr) {
        let back = []; //leeres Array
        for (let i = _arr.length - 1; i >= 0; i--) {
            back.push(_arr[i]); //stelle i in neues Array hinzufügen
        }
        return back;
    }
    //Aufgabe 2. b):
    console.log("Aufgabe 2. b) - concat"); // einfachere Funktion mit concat
    function join2() {
        let zsm = numberArray.concat(numberArray2);
        console.log(zsm);
    }
    join2();
    console.log("Aufgabe 2. b) - normal"); // ohne Funktion
    console.log(join(numberArray, numberArray2));
    function join(_arr1, _arr2) {
        let zsm = _arr1;
        for (let i = 0; i < _arr2.length; i++) {
            zsm.push(_arr2[i]);
        }
        return zsm;
    }
    //Aufgabe 2 c):
    console.log("Aufgabe 2. c)");
    console.log(split(numberArray, 1, 3));
    function split(_arr3, _position1, _position2) {
        let spanne = [];
        for (let i = _position1; i <= _position2; i++) {
            spanne.push(_arr3[i]);
        }
        return spanne;
    }
    //Aufgabe 3 a):
    console.log("Aufgabe 3. a)");
    let canvas = document.getElementById("Canvas_3.a)");
    let contextBoden = canvas.getContext("2d");
    contextBoden.fillStyle = "green";
    contextBoden.fillRect(10, 300, 400, 50);
})(Aufgabe2_2 || (Aufgabe2_2 = {})); //Ende namespace
//# sourceMappingURL=script.js.map