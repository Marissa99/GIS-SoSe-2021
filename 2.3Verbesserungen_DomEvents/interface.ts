namespace Aufgabe2_3Verbesserung {

    //Aufgabe 2 a) 
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById ("Eis");
   
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
    export interface Eis {
        waffeln: Waffel[];
        kugeln: Eiskugel[];
        topping: Topping[];
    }
}