namespace Aufgabe2_3 {

    //Aufgabe 2 c):

   //Waffelauswahl
   export let alleWaffeln: Waffel[] = [];

   let waffel1: Waffel = {farbe: "brown", form: canvas.getContext("2d") };
   waffel1.form.fillStyle = "brown";
   waffel1.form.beginPath();
   waffel1.form.moveTo (75, 25);
   waffel1.form.lineTo (125, 25);
   waffel1.form.lineTo (100, 75);
   waffel1.form.fill();
   
  
   let waffel2: Waffel = {farbe: "black", form: canvas.getContext("2d") };
   waffel2.form.fillStyle = "black";
   waffel1.form.beginPath();
   waffel1.form.moveTo (150, 25);
   waffel1.form.lineTo (200, 25);
   waffel1.form.lineTo (175, 75);
   waffel1.form.fill();
   alleWaffeln.push(waffel2);

   let waffel3: Waffel = {farbe: "grey", form: canvas.getContext("2d") };
   waffel2.form.fillStyle = "grey";
   waffel1.form.beginPath();
   waffel1.form.moveTo (225, 25);
   waffel1.form.lineTo (275, 25);
   waffel1.form.lineTo (250, 75);
   waffel1.form.fill();
   alleWaffeln.push(waffel3);

    
    //Kugelauswahl
   export let alleKugeln: Eiskugel[] = [];

   let kugel1: Eiskugel = {sorte: "Schoko", farbe: "brown", form: canvas.getContext("2d") };
   kugel1.form.fillStyle = "brown";
   kugel1.form.beginPath();
   kugel1.form.ellipse(100, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
   kugel1.form.fill();
   alleKugeln.push(kugel1);

   let kugel2: Eiskugel = {sorte: "Erdbeere", farbe: "red", form: canvas.getContext("2d")};
   kugel2.form.fillStyle = "red";
   kugel2.form.beginPath();
   kugel2.form.ellipse (200, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
   kugel2.form.fill();
   alleKugeln.push(kugel2);

   let kugel3: Eiskugel = {sorte: "Vanille", farbe: "yellow", form: canvas.getContext("2d")};
   kugel2.form.fillStyle = "yellow";
   kugel3.form.beginPath();
   kugel3.form.ellipse(300, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
   kugel3.form.fill();
   alleKugeln.push(kugel3);
    
    
    //Streusselauswahl
   export let alleEssrohr: Essrohr[] = [];

   let essrohr1: Essrohr = {farbe: "pink", form: canvas.getContext("2d") };
   kugel2.form.fillStyle = "pink";
   essrohr1.form.fillRect (50, 300, 400, 50);
   alleEssrohr.push(essrohr1);

   let essrohr2: Essrohr = {farbe: "green", form: canvas.getContext("2d") };
   kugel2.form.fillStyle = "green";
   essrohr2.form.fillRect (50, 380, 400, 50);
   alleEssrohr.push(essrohr2);

   let essrohr3: Essrohr = {farbe: "orange", form: canvas.getContext("2d") };
   kugel2.form.fillStyle = "orange";
   essrohr3.form.fillRect (50, 460, 400, 50);
   alleEssrohr.push(essrohr2);

    
}
