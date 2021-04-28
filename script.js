
var availableEmails = ["topogigio@boolean.com", "paperino@boolean.com", "topolino@boolean.com", "goku@boolean.com", "eren@boolean.com"];

var userEmail = prompt("Inserisci la tua mail");
var mailCorrect = false;

for (var i = 0; i < availableEmails.length; i++) {
    if (userEmail==availableEmails[i]) {
        mailCorrect= true;
    }
}
if (mailCorrect== true) {
    document.getElementById("validation").innerHTML = "benvenuto " + userEmail;
} else {
    document.getElementById("validation").innerHTML = "spiacenti, la mail non è corretta";
}


// Gioco Dadi //

var userDice = Math.floor(Math.random() * 6) + 1;
var cpuDice = Math.floor(Math.random() * 6) + 1;

console.log(userDice);
console.log(cpuDice);

if (userDice > cpuDice) {
    document.getElementById("result").innerHTML = "Hai Vinto";
  } else if (userDice < cpuDice) {
    document.getElementById("result").innerHTML = "Hai Perso";
  } else {
    document.getElementById("result").innerHTML = "Pareggio";
  }

  document.getElementById("user-score").innerHTML= "il tuo dado ha dato " + userDice;
  document.getElementById("cpu-score").innerHTML= "l dado della cpu ha dato " + cpuDice;