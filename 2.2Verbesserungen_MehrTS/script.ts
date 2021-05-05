namespace Aufgabe2_2Verbesserungen {

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
  console.log(studiArray[0].name, studiArray[1].vorname, studiArray[2].alter, studiArray[3].matrikel); //Ausgabe einiger Attribute

  
  for (let i: number = 0; i < studiArray.length; i++) { //geht das Array durch
    console.log ("Zeige Infos:");
    showInfo(studiArray[i].vorname, studiArray[i].name, studiArray[i].alter, studiArray[i].matrikel); //ruft Funktion auf und gibt die Stellen des Arrays ein
  }
  function showInfo(_vorname: string, _name: string, _alter: number, _matrikel: number): void { //Funktion mit Übergabeparametern
   console.log(_name);
   console.log(_vorname);
   console.log(_alter);
   console.log(_matrikel);
  }

  //Aufgabe 1. c) 5.:
  console.log("Aufgabe 1. c) 5."); 

  class Student2 {
    name: string;
    vorname: string; 
    alter: number; 
    matrikel: number; 
    
    constructor(_name: string, _vorname: string, _alter: number, _matrikel: number) {
      this.name = _name;
      this.vorname = _vorname; 
      this.alter = _alter;
      this.matrikel = _matrikel;
    }
    
    showInfo(): void {
      console.log(this.name, this.vorname, this.alter, this.matrikel);
    } 
  }
  let studi: Student2 = new Student2("Kraus", "Melanie", 23, 456637); //neuer Student und die Übergabeparameter direkt in die Klammern
  studi.showInfo(); 


   //Aufgabe 2 a):
  let numberArray: number [] = [2, 5, 10, 13, 20];
   
  console.log("Aufgabe 2. a) - normal"); //ohne reverse Methode
  console.log (backwards(numberArray));
  function backwards(_arr: number[]): number[] {
    let back: number [] = []; //leeres Array
    for (let i: number = _arr.length - 1; i >= 0;  i --) {
      back.push (_arr[i]); //stelle i in neues Array hinzufügen
    }
    return back;
  }
}
