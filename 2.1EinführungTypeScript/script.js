"use strict";
/*Aufgabe 1:*/
function a1() {
    let x = "Alles";
    console.log(x);
    func2();
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
function func2() {
    console.log("Gute!");
}
/* Ergebnis:
a) Ausgabe: Alles Klar? Logo!
Zulässige Namen: alles kleingeschreibene, KamelVerfahren soweie Zahlen
Unzulässige Namen: Keine Leerzeichen, Dopplungen der Variablennamen oder Funktionen sowie Umlaute nicht gewünscht

b) Debugger Ausführung: function a1 - Ausgabe string "Alles" - Aufrufen func1 "Klar?" -Konsole "Logo"

c) Einfügen weiterer Funktionen: func2
*/
/* Aufgabe 2:*/
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/*Ergebnis:
Variable i wird auf 9 gesetzt.
Die Schleife do wird ausgeführt, und zählt von 9 rückwärts solange es größer 0 ist.
Variable i wird kurzzeitig immer auf den neuen Wert gesetzt.

*/
/* Aufgabe 3:*/
/*
-Variablen in Funktionen falsch benannt bzw. gedopplelt
-Falsche Variablen in Funktionen aufrufen
-Zeichen vergessen (, ; () {}*/
/* Aufgabe 4: func1,2,3 wurden durch 3,4,5 ersetzt da es sonst Überschneidungen gibt.*/
let x = "Hallo";
console.log(x);
func3(x);
console.log(x);
func4();
func5();
console.log(x);
function func3(y) {
    y = "Bla";
    console.log(y);
}
function func4() {
    let x = "Blubb";
    console.log(x);
}
function func5() {
    x = "Test";
}
/*Ergebnis:
a) String "Hallo" -func3 "Bla" - Sting "Hallo" - func4 "Blubb" - func5 "Test"
    -->Stimmt mit der Ausgabe überein

b) globale = Übergeordnete Variablen welche auch außerhalb bestehen.
lokale = Variablen welche nur innerhalb der Klammern {} bzw. hier innerhalb der Funktion bestehen.
Übergagabeparameter =  Man kann einer Funktion Werte/Variablen/Strings mitgeben

Unterschied: Variablen speichern Typ und Wert, hingegen können Funktionen mit ihnen arbeiten.
Gemeinsam: haben an sich keinen Rückgabewert (void) außer man möchte etwas zurück bekommen
*/
/*Aufgabe 5:*/
let zahl1 = 5;
let zahl2 = 4;
let i = 1;
let j = 1900;
multiply(zahl1, zahl2);
max(zahl1, zahl2);
schleife();
getRandom();
factorial(zahl1);
leapyears(j);
/*a)*/
function multiply(a, b) {
    let ergebnis = a * b;
    console.log(ergebnis);
}
/*b)*/
function max(a, b) {
    if (a < b) {
        console.log(b);
    }
    else {
        console.log(a);
    }
}
/*c)*/
function schleife() {
    let sum = 0;
    i = 1;
    do {
        sum = sum + i;
        i = i + 1;
    } while (i <= 100);
    console.log(sum);
}
/*d)*/
function getRandom() {
    for (let i = 0; i < 10; i++) {
        let min = 0;
        let max = 100;
        let zufall = (Math.random() * (max - min)) + min;
        console.log(zufall);
    }
}
/*e)*/
function factorial(n) {
    let facult = n;
    if (n > 1) {
        do {
            facult = facult * (n - 1);
            n = n - 1;
        } while (n > 1);
    }
    else {
        facult = 1;
    }
    console.log(facult);
}
/*f)*/
function leapyears(jahr) {
    for (jahr; jahr < 2022; jahr++) {
        if (jahr % 4 == 0 && jahr % 100 !== 0 || jahr % 400 == 0) {
            console.log(jahr);
        }
    }
}
//Aufgabe 6:
//a)
console.log("6.a)");
symbol();
function symbol() {
    let hashtag = "#";
    for (let i = 0; i < 7; i++) {
        console.log(hashtag);
        hashtag = hashtag + "#";
    }
}
//b)
console.log("6.b)");
hochzaelen();
function hochzaelen() {
    let zahl = 1;
    for (zahl; zahl <= 100; zahl++) {
        if (zahl % 3 == 0) {
            console.log("Fizz");
        }
        else {
            if (zahl % 5 == 0) {
                console.log("Buzz");
            }
            else {
                console.log(zahl);
            }
        }
    }
}
//c) //funktioniert noch nicht!
console.log("6.c)");
spiel();
function spiel() {
    let zahl = 1;
    for (zahl; zahl <= 100; zahl++) {
        if (zahl % 3 == 0) {
            console.log("Fizz");
        }
        else {
            if (zahl % 5 == 0) {
                console.log("Buzz");
            }
            else {
                if (zahl % 3 == 0 && zahl % 5 == 0)
                    console.log("FizzBuzz");
                else {
                    console.log(zahl);
                }
            }
        }
    }
}
//d) 
console.log("6.d)");
schach();
function schach() {
    let brett = "";
    let zeilen = 1;
    let position = 1;
    for (zeilen; zeilen < 9; zeilen++) {
        for (position; position < 9; position++) {
            if (zeilen % 2 !== 0 && position % 2 !== 0 || zeilen % 2 == 0 && position % 2 == 0) {
                brett = brett + " ";
            }
            else {
                brett = brett + "#";
            }
        }
        brett = brett + "\n";
    }
    console.log(brett);
}
//# sourceMappingURL=script.js.map