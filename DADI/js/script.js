// DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Imposta lancio del dado random da 1 a 6:
let diceUserRoll = Math.floor(Math.random ()*6) + 1;
let diceComputerRoll = Math.floor(Math.random ()*6) + 1;
console.log(diceUserRoll, diceComputerRoll);

// Chiedo all'Utente di lanciare i dadi premendo invio:
const userRoll = diceUserRoll;
diceRoll = parseInt(prompt("Premi invio per lanciare i dadi!"));

// Mostro il risultato dell'Utente:
alert("Hai lanciato un " + userRoll);

// Chiedo all'utente di far lanciare i dadi al Computer premendo invio:
const computerRoll = diceComputerRoll;
diceRoll = parseInt(prompt("Ora è il mio turno! Premi invio per farmi lanciare i dadi!"));
console.log(computerRoll);

// Mostro il risultato del Computer
alert("Ho lanciato un " + computerRoll);

// Stabilisco il vincitore:
let winner;
if (userRoll > computerRoll) {
    winner = "User";
    alert("Hai vinto!")
} else if (userRoll < computerRoll) {
    winner = "Computer";
    alert("Hai perso!")
} else {
    winner = "None";
    alert("Hai pareggiato!")
}






