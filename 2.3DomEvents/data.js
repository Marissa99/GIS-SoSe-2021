"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Kugelauswahl
    Aufgabe2_3.alleKugeln = [];
    let kugel1 = { sorte: "Schoko", farbe: "brown", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel1.form.ellipse(300, 70, 30, 70, Math.PI / 3, 0, 2 * Math.PI);
    Aufgabe2_3.alleKugeln.push(kugel1);
    let kugel2 = { sorte: "Erdbeere", farbe: "red", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleKugeln.push(kugel2);
    let kugel3 = { sorte: "Vanille", farbe: "yellow", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleKugeln.push(kugel3);
    //Waffelauswahl
    Aufgabe2_3.alleWaffeln = [];
    let waffel1 = { farbe: "brown", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleWaffeln.push(waffel1);
    let waffel2 = { farbe: "black", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleWaffeln.push(waffel2);
    let waffel3 = { farbe: "white", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleWaffeln.push(waffel3);
    //Streusselauswahl
    Aufgabe2_3.alleStreussel = [];
    let streussel1 = { farbe: "pink", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleWaffeln.push(streussel1);
    let streussel2 = { farbe: "orange", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleWaffeln.push(streussel2);
    let streussel3 = { farbe: "greeen", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleWaffeln.push(streussel3);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map