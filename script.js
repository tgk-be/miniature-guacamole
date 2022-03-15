var counterf = 0;
var countere = 0;
var wl = 0;
const paper = [2, 1, 1, 0, 0];
const rock = [0, 2, 1, 0, 1];
const lizard = [1, 0, 2, 1, 0];
const spock = [0, 1, 0, 2, 1];
const scissors = [1, 0, 1, 0, 2];
document.getElementById("yourscore").innerHTML = counterf
document.getElementById("otherscore").innerHTML = countere;


function game(userc){
    var random = Math.round(Math.random()*5);
    switch(random) {
        case 0:
            wl = paper[userc];
        break;
        case 1:
            wl = rock[userc];
        break;
        case 2:
            wl = lizard[userc];
        break;
        case 3:
            wl = spock[userc];
        break;
        case 4:
            wl = scissors[userc];
            break;
        default:
    }
    if(wl == 1){
        countere++;
        document.getElementById("result2").innerHTML = "lose"
    }
    else if(wl == 0){
        counterf++;
        document.getElementById("result2").innerHTML = "win";
    }
    else{
        document.getElementById("result2").innerHTML = "tie";
    }
    document.getElementById("yourscore").innerHTML = counterf;
    document.getElementById("otherscore").innerHTML = countere;
    console.log(countere);
    console.log(counterf);
    console.log(document.getElementById("result2").innerHTML);
  }