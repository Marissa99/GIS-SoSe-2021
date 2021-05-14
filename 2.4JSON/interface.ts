namespace Aufgabe2_4 {

    //Aufgabe 2 a) 
    export interface Eiskreation { //interface welches die Auswahl beeinhaltet
        image: string;
        name: string;
    }
   
    export interface Waffel extends Eiskreation {
        image: string;
        name: string;
    } 
    export interface Eiskugel extends Eiskreation {
        image: string;
        name: string;
        
    }
    export interface Topping extends Eiskreation {
        image: string;
        name: string;
    
    }

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