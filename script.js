var myScore = computerScore = 0,
    names = ["Rock", "Paper", "Scissors"],
    symbols = ["✊", "✋", "✌"];

function showScores(){
    document.getElementById("my-score").innerHTML = "You : <b>"+myScore+"</b>";
    document.getElementById("computer-score").innerHTML = "Computer : <b>"+computerScore+"</b>";
}

function main(myChoice){
    var computerChoice = Math.floor((Math.random() * 2)),
    message = "";
    document.getElementById("my-choice").innerHTML = symbols[myChoice]+"<br>"+names[myChoice];
    document.getElementById("computer-choice").innerHTML = symbols[computerChoice]+"<br>"+names[computerChoice];
    if (myChoice === computerChoice)
        message = "😐 Tie !";
    else if ((myChoice === 0 && computerChoice === 2) || (myChoice === 1 && computerChoice === 0) || (myChoice === 2 && computerChoice === 1)){
        message = "😎 Win !";
        myScore++;
    }
    else{
        message = "😡 Lost !";
        computerScore++;
    }
    document.getElementById("message").innerHTML = message;
    showScores();
}

showScores();