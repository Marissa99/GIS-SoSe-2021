namespace Aufgabe2_3 {

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_2.a)");
    export interface Eis {
        eiskugel: Eiskugel;
        waffel: Waffel;
        streussel: Streussel;
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
    export interface Streussel {
        farbe: string;
        form: CanvasRenderingContext2D;
    }
}