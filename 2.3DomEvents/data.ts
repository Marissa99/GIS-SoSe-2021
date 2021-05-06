namespace Aufgabe2_3 {

    //Kugelauswahl
    export let alleKugeln: Eiskugel[] = [];

    let kugel1: Eiskugel = {sorte: "Schoko", farbe: "brown", form: canvas.getContext("2d") };
    kugel1.form.ellipse(300, 70, 30, 70, Math.PI / 3, 0, 2 * Math.PI);
    alleKugeln.push(kugel1);

    let kugel2: Eiskugel = {sorte: "Erdbeere", farbe: "red", form: canvas.getContext("2d")};
    alleKugeln.push(kugel2);

    let kugel3: Eiskugel = {sorte: "Vanille", farbe: "yellow", form: canvas.getContext("2d")};
    alleKugeln.push(kugel3);
    
    //Waffelauswahl
    export let alleWaffeln: Waffel[] = [];

    let waffel1: Waffel = {farbe: "brown", form: canvas.getContext("2d") };
    alleWaffeln.push(waffel1);
    
    let waffel2: Waffel = {farbe: "black", form: canvas.getContext("2d") };
    alleWaffeln.push(waffel2);

    let waffel3: Waffel = {farbe: "white", form: canvas.getContext("2d") };
    alleWaffeln.push(waffel3);

    //Streusselauswahl
    export let alleStreussel: Streussel[] = [];

    let streussel1: Streussel = {farbe: "pink", form: canvas.getContext("2d") };
    alleWaffeln.push(streussel1);

    let streussel2: Streussel = {farbe: "orange", form: canvas.getContext("2d") };
    alleWaffeln.push(streussel2);

    let streussel3: Streussel = {farbe: "greeen", form: canvas.getContext("2d") };
    alleWaffeln.push(streussel3);

    
}
