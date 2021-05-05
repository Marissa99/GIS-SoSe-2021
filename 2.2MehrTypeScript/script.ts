namespace Aufgabe2_2 {
    
    //Aufgabe 1. a):

    console.log("Aufgabe 1. a)"); 

    console.log(min(1, 4, 6, 8)); //Übergabeparameter eingeben
    function min(...zahlen: number[]): number { //beliebig viele Zahlen können eingeben werden

        let minimum: number;
        for (let i: number = 0; i < zahlen.length; i++) {
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
 
    function isEven(zahl: number): boolean {
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
    

    interface Student {
        name: string;
        vorname: string; 
        alter: number; 
        matrikel: number; 

    }
    let s1: Student = {name: "Müller", vorname: "Max", alter: 22, matrikel: 123456 };
    let s2: Student = {name: "Maier", vorname: "Tim", alter: 29, matrikel: 674598 };
    let s3: Student = {name: "Becker", vorname: "Sarah", alter: 20, matrikel: 976856 };

    let studiArray: Student[] = [s1, s2, s3, {name: "Alber", vorname: "Marie", alter: 18, matrikel: 983454}];
    console.log(studiArray[0].name, studiArray[1].vorname, studiArray[2].alter, studiArray[3].matrikel);
    
    function showInfo(vorname: string): void {
        let auskunft: Student;
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
        name: string;
        vorname: string; 
        alter: number; 
        matrikel: number; 
    
        createStudent2 (_name: string, _vorname: string, _alter: number, _matrikel: number): void {
            this.name = _name;
            this.vorname = _vorname; 
            this.alter = _alter;
            this.matrikel = _matrikel;
        }
        showInfo (): void {
            console.log("Name: " + this.name + ", Vorname: " + this.vorname);
        } 
    }
    let studi: Student2 = new Student2(); //neuer Student
    studi.createStudent2 ("Kraus", "Melanie", 23, 456637); //um Ihn zu kreieren muss man zuerst in den studi
    studi.showInfo(); 

    //Aufgabe 2 a):
    let numberArray: number [] = [2, 5, 10, 13, 20];
    let numberArray2: number [] = [ 1, 4, 8, 15];

 
    console.log("Aufgabe 2. a) - reverse"); //einfachere Funktion
    function backwards2(): void {
        numberArray.reverse();
    }
    console.log(numberArray.reverse());
    backwards2();

    
    console.log("Aufgabe 2. a) - normal"); //ohne reverse Methode
    console.log (backwards(numberArray));
    function backwards(_arr: number[]): number[] {
        let back: number [] = []; //leeres Array
        for (let i: number = _arr.length - 1; i >= 0;  i --) {
            back.push (_arr[i]); //stelle i in neues Array hinzufügen
        }
        return back;
    }
        
     
    //Aufgabe 2. b):
    console.log("Aufgabe 2. b) - concat"); // einfachere Funktion mit concat

    function join2(): void {
        let zsm: number [] = numberArray.concat (numberArray2);
        console.log(zsm);
    }
    join2();

    console.log("Aufgabe 2. b) - normal"); // ohne Funktion
    console.log(join(numberArray, numberArray2));
    
    function join(_arr1: number [], _arr2: number []): number [] {
        let zsm: number [] = _arr1;
        
        for (let i: number = 0; i < _arr2.length; i ++) {
            zsm.push (_arr2[i]);
        }
        return zsm;
    }
     //Aufgabe 2 c):
    console.log("Aufgabe 2. c)");
    console.log(split(numberArray, 1, 3));
    
    function split(_arr3: number[], _position1: number, _position2: number): number [] {
        let spanne: number [] = [];

        for (let i: number = _position1; i <= _position2; i++) {
            spanne.push(_arr3[i]);
        } 
        return spanne;
    }
    

    //Aufgabe 3 a):
    console.log("Aufgabe 3. a)");
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_3.a)");
    let contextBoden: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextHimmel: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextHaus: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextDach: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextBaum: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextBlatt: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextBlatt2: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextBlatt3: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextTür: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextWolken: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextWolken2: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextWolken3: CanvasRenderingContext2D = canvas.getContext("2d");

    contextBoden.fillStyle = "green";
    contextBoden.fillRect (10, 300, 400, 50);

    contextHimmel.fillStyle = "blue";
    contextHimmel.fillRect (10, 10, 400, 300);

    contextHaus.fillStyle = "white";
    contextHaus.fillRect (185, 210, 100, 100);
    
    contextDach.beginPath();
    contextDach.moveTo (150, 210);
    contextDach.lineTo (230, 160);
    contextDach.lineTo (320, 210);
    contextDach.fill();
    
    contextHaus.fillStyle = "black";
    contextTür.fillRect(220, 260, 30, 50);
    
    contextBaum.fillStyle = "brown";
    contextBaum.fillRect (70, 210, 15, 100);

    contextWolken.fillStyle = "white";
    contextWolken.beginPath();
    contextWolken.ellipse(300, 70, 30, 70, Math.PI / 3, 0, 2 * Math.PI);
    contextWolken.fill();

    contextWolken2.fillStyle = "white";
    contextWolken2.beginPath();
    contextWolken2.ellipse(300, 70, 30, 70, Math.PI / 2, 0, 2 * Math.PI);
    contextWolken2.fill();

    contextWolken3.fillStyle = "white";
    contextWolken3.beginPath();
    contextWolken3.ellipse(300, 70, 30, 70, Math.PI / 1.4, 0, 2 * Math.PI);
    contextWolken3.fill();

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
        canvas2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_3.b)");
        contextRechteck: CanvasRenderingContext2D = this.canvas2.getContext("2d"); //braucht this. um darauf zugreifen zu können.
        breite: number;
        hoehe: number; 
        xKoordinate: number;
        yKoordinate: number;

        constructor(_x: number, _y: number, _breite: number, _hoehe: number) {
            this.xKoordinate = _x;
            this.yKoordinate = _y;
            this.breite = _breite;
            this.hoehe = _hoehe;
        }
        Rechteck (): void {
            this.contextRechteck.strokeRect(this.xKoordinate, this.yKoordinate, this.breite, this.hoehe);
        }
    }
    let rechteck1: Rechteck = new Rechteck (100, 100 , 100, 100);
    rechteck1.Rechteck();

    
    //Aufgabe 3 c):
    console.log("Aufgabe 3. c) und d)"); 

    class Rechteck2 {
        canvas3: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_3.c), d)");
        contextRechteck: CanvasRenderingContext2D = this.canvas3.getContext("2d"); //braucht this. um darauf zugreifen zu können.
        breite: number;
        hoehe: number; 
        xKoordinate: number;
        yKoordinate: number;

        constructor() {
            this.xKoordinate = Math.random() * (400 - 0);
            this.yKoordinate = Math.random() * (400 - 0);
            this.breite = Math.random() * (400 - 0);
            this.hoehe = Math.random() * (400 - 0);
        }
        drawRect(): void { //d)
            this.contextRechteck.fillRect(this.xKoordinate, this.yKoordinate, this.breite, this.hoehe);
        }
    }
    let rechteckzufall: Rechteck2 = new Rechteck2();
    rechteckzufall.drawRect();

    //Aufgabe 3 d):
    console.log("Aufgabe 3. d) --> siehe c) (wurde dort auch verändert - drawRec())");

    //Aufgabe 3 e):
    console.log("Aufgabe 3.e)");

    class Rechteck3 {
        canvas4: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_3.e)");
        contextRechteck: CanvasRenderingContext2D = this.canvas4.getContext("2d"); //braucht this. um darauf zugreifen zu können.
        breite: number;
        hoehe: number; 
        xKoordinate: number;
        yKoordinate: number;
        
        constructor() {
            this.xKoordinate = Math.random() * (400 - 0);
            this.yKoordinate = Math.random() * (400 - 0);
            this.breite = Math.random() * (400 - 0);
            this.hoehe = Math.random() * (400 - 0);
        }
        drawRect(): void { 
            this.contextRechteck.strokeRect(this.xKoordinate, this.yKoordinate, this.breite, this.hoehe);
        }
    }
    let rechteckArray: Rechteck3[] = [];
    
    for (let i: number = 0; i < 5; i++) {
        rechteckArray.push(new Rechteck3());
        rechteckArray[i].drawRect();
    }

    console.log("Für die Bonus Aufgabe 3. f) und g) hatte ich leider keine Zeit mehr, da ich an den anderen Aufgaben schon echt lange saß und noch andere Abgaben machen musste.");
}//Ende namespace