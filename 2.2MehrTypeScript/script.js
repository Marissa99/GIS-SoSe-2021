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
    let contextHimmel = canvas.getContext("2d");
    let contextHaus = canvas.getContext("2d");
    let contextDach = canvas.getContext("2d");
    let contextBaum = canvas.getContext("2d");
    let contextBlatt = canvas.getContext("2d");
    let contextBlatt2 = canvas.getContext("2d");
    let contextBlatt3 = canvas.getContext("2d");
    let contextTür = canvas.getContext("2d");
    let contextWolken = canvas.getContext("2d");
    contextBoden.fillStyle = "green";
    contextBoden.fillRect(10, 300, 400, 50);
    contextHimmel.fillStyle = "blue";
    contextHimmel.fillRect(10, 10, 400, 300);
    contextHaus.fillStyle = "white";
    contextHaus.fillRect(185, 210, 100, 100);
    contextDach.beginPath();
    contextDach.moveTo(150, 210);
    contextDach.lineTo(230, 160);
    contextDach.lineTo(320, 210);
    contextDach.fill();
    contextHaus.fillStyle = "black";
    contextTür.fillRect(220, 260, 30, 50);
    contextBaum.fillStyle = "brown";
    contextBaum.fillRect(70, 210, 15, 100);
    contextWolken.fillStyle = "white";
    contextWolken.beginPath();
    contextWolken.moveTo(75, 40);
    contextWolken.bezierCurveTo(100, 37, 70, 25, 50, 25);
    contextWolken.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    contextWolken.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    contextWolken.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    contextWolken.bezierCurveTo(85, 25, 75, 37, 75, 40);
    contextWolken.fill();
    contextBlatt.fillStyle = "green";
    contextBlatt.beginPath();
    contextBlatt.ellipse(60, 200, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
    contextBlatt.fill();
    contextBlatt2.fillStyle = "green";
    contextBlatt2.beginPath();
    contextBlatt2.ellipse(80, 160, 50, 30, Math.PI * .5, 0, Math.PI * 1.5);
    contextBlatt2.fill();
    contextBlatt3.fillStyle = "green";
    contextBlatt3.beginPath();
    contextBlatt3.ellipse(100, 200, 50, 30, Math.PI * 1.0, 0, Math.PI * 1.5);
    contextBlatt3.fill();
    //Aufgabe 3 b):
    console.log("Aufgabe 3. b)");
    class Rechteck {
        constructor(_x, _y, _breite, _hoehe) {
            this.canvas2 = document.getElementById("Canvas_3.b)");
            this.contextRechteck = this.canvas2.getContext("2d"); //braucht this. um darauf zugreifen zu können.
            this.xKoordinate = _x;
            this.yKoordinate = _y;
            this.breite = _breite;
            this.hoehe = _hoehe;
        }
        Rechteck() {
            this.contextRechteck.strokeRect(this.xKoordinate, this.yKoordinate, this.breite, this.hoehe);
        }
    }
    let rechteck1 = new Rechteck(100, 100, 100, 100);
    rechteck1.Rechteck();
    //Aufgabe 3 c):
    console.log("Aufgabe 3. c) und d)");
    class Rechteck2 {
        constructor() {
            this.canvas3 = document.getElementById("Canvas_3.c), d)");
            this.contextRechteck = this.canvas3.getContext("2d"); //braucht this. um darauf zugreifen zu können.
            this.xKoordinate = Math.random() * (400 - 0);
            this.yKoordinate = Math.random() * (400 - 0);
            this.breite = Math.random() * (400 - 0);
            this.hoehe = Math.random() * (400 - 0);
        }
        drawRect() {
            this.contextRechteck.fillRect(this.xKoordinate, this.yKoordinate, this.breite, this.hoehe);
        }
    }
    let rechteckzufall = new Rechteck2();
    rechteckzufall.drawRect();
    //Aufgabe 3 d):
    console.log("Aufgabe 3. d) --> siehe c) (wurde dort auch verändert - drawRec())");
    //Aufgabe 3 e):
    console.log("Aufgabe 3.e)");
    class Rechteck3 {
        constructor() {
            this.canvas4 = document.getElementById("Canvas_3.e)");
            this.contextRechteck = this.canvas4.getContext("2d"); //braucht this. um darauf zugreifen zu können.
            this.xKoordinate = Math.random() * (400 - 0);
            this.yKoordinate = Math.random() * (400 - 0);
            this.breite = Math.random() * (400 - 0);
            this.hoehe = Math.random() * (400 - 0);
        }
        drawRect() {
            this.contextRechteck.strokeRect(this.xKoordinate, this.yKoordinate, this.breite, this.hoehe);
        }
    }
    let rechteckArray = [];
    for (let i = 0; i < 5; i++) {
        rechteckArray.push(new Rechteck3());
        rechteckArray[i].drawRect();
    }
    console.log("Für die Bonus Aufgabe 3. f) und g) hatte ich leider keine Zeit mehr, da ich an den anderen schon echt lange saß.");
})(Aufgabe2_2 || (Aufgabe2_2 = {})); //Ende namespace
//# sourceMappingURL=script.js.map