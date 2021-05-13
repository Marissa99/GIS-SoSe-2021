namespace Aufgabe2_4 {

    //Aufgabe 2 a) 
   
    export interface Waffel {
        image: string;
        name: string;
    } 
    export interface Eiskugel {
        image: string;
        name: string;
    }
    export interface Topping {
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