namespace Aufgabe2_5 {

    //Aufgabe 2 a) 
    export interface Eiskreation { //interface welches die Auswahl beeinhaltet
        image: string;
        name: string;
    }
   
    export interface Waffel extends Eiskreation {} //erben alle Attribute der Eiskreation

    export interface Eiskugel extends Eiskreation {}

    export interface Topping extends Eiskreation {}

    //Aufgabe 2 b)
    export interface AlleAuswahlmoeglichkeiten {
        waffeln: Waffel[];
        kugeln: Eiskugel[];
        topping: Topping[];
    }
    
    export interface Eis {
        waffel: Waffel;
        kugel: Eiskugel;
        topping: Topping;
    }
}