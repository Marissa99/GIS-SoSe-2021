namespace P_3_1Server {
    //Teilaufgabe 2
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        console.log(":" + formData.get ("name")); //Ausgabe
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]); //Ausgabe
            console.log("name: " + entry[0]); //Ausgabe
        }
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        let _url: RequestInfo = "https://gissose2021mr.herokuapp.com/";
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response: Response = await fetch (_url); // auf url warten
        let antwort: string = await response.text();
        console.log (antwort); 
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe");
        rueckgabe.innerText = antwort;
    }
    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", sendData);
  
}//Ende namespace