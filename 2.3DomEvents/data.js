"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe 2 c):
    //Kugelauswahl
    Aufgabe2_3.alleKugeln = [];
    let kugel1 = { sorte: "Schoko", farbe: "brown", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel1.form.fillStyle = "brown";
    kugel1.form.beginPath();
    kugel1.form.ellipse(50, 50, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    kugel1.form.fill();
    Aufgabe2_3.alleKugeln.push(kugel1);
    let kugel2 = { sorte: "Erdbeere", farbe: "red", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "red";
    kugel2.form.beginPath();
    kugel2.form.ellipse(150, 50, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    kugel2.form.fill();
    Aufgabe2_3.alleKugeln.push(kugel2);
    let kugel3 = { sorte: "Vanille", farbe: "yellow", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "yellow";
    kugel3.form.beginPath();
    kugel3.form.ellipse(250, 50, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    kugel3.form.fill();
    Aufgabe2_3.alleKugeln.push(kugel3);
    //Waffelauswahl
    Aufgabe2_3.alleWaffeln = [];
    let waffel1 = { farbe: "brown", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "brown";
    waffel1.form.beginPath();
    waffel1.form.moveTo(150, 210);
    waffel1.form.lineTo(230, 160);
    waffel1.form.lineTo(320, 210);
    waffel1.form.fill();
    let waffel2 = { farbe: "black", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "black";
    waffel1.form.beginPath();
    waffel1.form.moveTo(100, 160);
    waffel1.form.lineTo(180, 110);
    waffel1.form.lineTo(280, 210);
    waffel1.form.fill();
    Aufgabe2_3.alleWaffeln.push(waffel2);
    let waffel3 = { farbe: "grey", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "grey";
    waffel1.form.beginPath();
    waffel1.form.moveTo(150, 210);
    waffel1.form.lineTo(230, 160);
    waffel1.form.lineTo(330, 160);
    waffel1.form.fill();
    Aufgabe2_3.alleWaffeln.push(waffel3);
    //Streusselauswahl
    Aufgabe2_3.alleEssrohr = [];
    let essrohr1 = { farbe: "pink", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "pink";
    essrohr1.form.fillRect(50, 300, 400, 50);
    Aufgabe2_3.alleEssrohr.push(essrohr1);
    let essrohr2 = { farbe: "green", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "green";
    essrohr2.form.fillRect(50, 380, 400, 50);
    Aufgabe2_3.alleEssrohr.push(essrohr2);
    let essrohr3 = { farbe: "orange", form: Aufgabe2_3.canvas.getContext("2d") };
    kugel2.form.fillStyle = "orange";
    essrohr3.form.fillRect(50, 460, 400, 50);
    Aufgabe2_3.alleEssrohr.push(essrohr2);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map