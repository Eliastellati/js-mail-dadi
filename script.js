
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
