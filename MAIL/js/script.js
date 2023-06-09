// MAIL
// Creo un array con 4 mail,

// Chiedo all’utente la sua email,
// Controlla che sia nella lista di chi può accedere,
// Stampa un messaggio appropriato sull’esito del controllo.

// SE la mail inserita è contenuta nell'array, STAMPO "accesso consentito"
// ALTRIMENTI, STAMPO "accesso negato, inserisci nuovamente.."

// Assegno elementi da mostrare nel DOM:
const submitBtn = document.getElementById("send-btn");
submitBtn.addEventListener("click", function (){
    const userEmailInput = document.getElementById("user-email");

    const userEmailElem = document.getElementById("success-msg");
    
    const errorElem = document.getElementById("error-msg");
    const successElem = document.getElementById("success-msg");
    
    // Creo un array con 4 email:
    const emails = ["mariorossi@abc.com", "lucabianchi@xyz.it", "giuseppeverdi@123.org", "fabioneri@qwerty.net"]
    console.log(emails);
    
    // Chiedo di inserire la mail:
    const userEmail = userEmailInput.value;
    console.log(userEmail);
    
    let accepted = false;
    
    for (let i = 0; i < emails.length; i++) {
        const currentEmail = emails[i];
        
        if (currentEmail === userEmail) {
            accepted = true;
        }
    }
    
    if (accepted === true) {
        console.log("Accesso consentito"); 
        document.getElementById("success-msg").className="success";
    
    } else {
        console.log("Accesso negato");
        document.getElementById("error-msg").className="fail";
    
    }

});








