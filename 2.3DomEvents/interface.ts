namespace Aufgabe2_3 {

    //Aufgabe 2 a) und b):

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_2-Gesamt");
    export interface Eis {
        eiskugel: Eiskugel;
        waffel: Waffel;
        streussel: Essrohr;
    }
    export let canvas2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_2-Waffel");
    export interface Waffel {
        farbe: string;
        form: CanvasRenderingContext2D;
    } 
    export let canvas3: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_2-Kugel");
    export interface Eiskugel {
        sorte: string; 
        farbe: string;
        form: CanvasRenderingContext2D;
    }
    export let canvas4: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_2-Topping");
    export interface Essrohr {
        farbe: string;
        form: CanvasRenderingContext2D;
    }
}