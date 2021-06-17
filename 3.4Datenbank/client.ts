namespace Aufgabe3_4 {

    let buttonVerschicken: HTMLButtonElement = <HTMLButtonElement> document.getElementById("datenVerschicken"); 
    buttonVerschicken.addEventListener("click", ); 
    let buttonAusgabe: HTMLButtonElement = <HTMLButtonElement> document.getElementById("datenAusgabe"); 
    buttonAusgabe.addEventListener("click", datenAnzeigen);

    async function datenAnzeigen(): Promise<void> { //async Funktion um Daten anzuschicken
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com"; //Verknüpfung mit der herokuapp
        //let url: RequestInfo = "http://localhost:8100"; um es lokas zu testen
        url += "/html"; // Anhängen mit einem / daher oben keiner notwenig
        //-->any motzt nicht mehr
        //tslint:disable-next-line 
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch (url); // auf url warten
        let responseText: string = await response.text(); 
        rueckgabe.innerHTML = responseText;
    }
    async function datenAbschicken(): Promise <void> {
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com";
        //-->any motzt nicht mehr
        //tslint:disable-next-line 
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        
    
    }
}