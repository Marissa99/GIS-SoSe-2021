namespace P_3_2ServerRequest {

    let jsonButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("JSONButton"); 
    jsonButton.addEventListener("click", sendDataJSON); //Eventlistener für JSON Button, aufrufen der Funktion
    let htmlButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("HTMLButton"); 
    htmlButton.addEventListener("click", sendDataHTML); //Eventlistener für HTMl Button, aufrufen der Funktion

    let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
    
    async function sendDataHTML(): Promise<void> { //async Funktion für html
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com"; //Verknüpfung mit der herokuapp
        //let url: RequestInfo = "http://localhost:8100"; um es lokas zu testen
        url += "/html"; // Anhängen mit einem / daher oben keiner notwenig
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch (url); // auf url warten
        let responseText: string = await response.text(); 
        rueckgabe.innerHTML = responseText;
    }
    async function sendDataJSON(): Promise<void> { //async Funktion für json
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com"; //Verknüpfung mit der herokuapp
        //let url: RequestInfo = "http://localhost:8100"; um es lokas zu testen
        url += "/json";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch (url); // auf url warten
        let objektJson: Serverantwort = await response.json(); // neues Objekt von Interface Ausgabe
        console.log(objektJson); //Ausgabe json string
       

        rueckgabe.innerHTML = objektJson.vorname; // Ausgabe Vorname zur Überprüfung
        rueckgabe.innerHTML = objektJson.nachname; 
        rueckgabe.innerHTML = objektJson.adresse; 
        console.log(rueckgabe);
    }

    interface Serverantwort { //Ausgabe auf der HTML Seite
        vorname: string; 
        nachname: string;
        adresse: string;
    }

}//Ende namespace