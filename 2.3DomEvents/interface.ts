namespace Aufgabe2_3 {

    //Aufgabe 2 a) und b):

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_2");
    export interface Eis {
        eiskugel: Eiskugel;
        waffel: Waffel;
        streussel: Essrohr;
    }

    export interface Eiskugel {
        sorte: string; 
        farbe: string;
        form: CanvasRenderingContext2D;
    }
    export interface Waffel {
        farbe: string;
        form: CanvasRenderingContext2D;
    }  
    export interface Essrohr {
        farbe: string;
        form: CanvasRenderingContext2D;
    }
    console.log(alleKugeln[3]);
}