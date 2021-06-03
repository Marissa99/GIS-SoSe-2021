namespace P_3_2ServerRequest {

    let jsonButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("JSONButton"); 
    jsonButton.addEventListener("click", sendDataHTML); //Eventlistener für JSON Button, aufrufen der Funktion
    let htmlButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("HTMLButton"); 
    htmlButton.addEventListener("click", sendDataJSON); //Eventlistener für HTMl Button, aufrufen der Funktion

    let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
    
    async function sendDataHTML(): Promise<void> { //async Funktion für html
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com/"; //Verknüpfung mit der herokuapp
        url += "/html";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch (url); // auf url warten
        let responseText: string = await response.text(); //
        rueckgabe.innerText = responseText;
    }

    async function sendDataJSON(): Promise<void> { //async Funktion für json
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com/"; //Verknüpfung mit der herokuapp
        url += "/json";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch (url); // auf url warten
        let responseText: string = await response.text(); // auf textausgabe warten
        console.log(responseText); //Ausgabe json string
        let responseJson: JSON = JSON.parse(responseText); //JSOn parsen
        console.log(responseJson); // Ausgabe JSON

        rueckgabe.innerHTML = responseText;
        console.log(rueckgabe);
    }
}//Ende namespace