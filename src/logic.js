var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

const result_p = document.querySelector(".result >p");

const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sc");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("s");
const user_div = document.getElementById("u");
const comp_div = document.getElementById("c");


function convertToWord(letter){
    switch (letter){
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "l":
            return "Lizard";
        case "sc":
            return "Scissors";
        case "s":
            return "Spock"
    }
}

function showCompetition(user,comp){
    let options = ['r','p','sc','l','s'];
    for (let i =0;i<5;i++){
        document.getElementById(options[i]).style.display="none";
        setTimeout(function(){document.getElementById(options[i]).style.display="inline-block"},1000);
    }

    user_div.getElementsByTagName("img")[0].src ="./images/"+convertToWord(user).toLowerCase()+".png";
    comp_div.getElementsByTagName("img")[0].src ="./images/"+convertToWord(comp).toLowerCase()+".png";
    
    
    user_div.style.display="inline-block";


   setTimeout(function(){user_div.style.display="none"},1000);
    comp_div.style.display="inline-block";
   setTimeout(function(){comp_div.style.display="none"},1000);
}

function win(user, comp){
    showCompetition(user,comp);
    userScore++;
    userScore_span.innerHTML =userScore;
    result_p.innerHTML=convertToWord(user)+ " beats " + convertToWord(comp) + ". You win!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove("green-glow")},500);
}
function draw(user){
    showCompetition(user,user);
    result_p.innerHTML="You draw!";
}
function lose(user, comp){
    showCompetition(user,comp);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML=convertToWord(comp)+ " beats " + convertToWord(user) + ". You lose!";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove("red-glow")},500);
}



function compChoice(){
    let choices = ['r','p','sc','l','s'];
    let move = Math.floor(Math.random()*4);
    return choices[move];
}
function game(move){

    let compchoice = compChoice();
    switch(move+compchoice){
        case "rl":
        case "rsc":
        case "ls":
        case "lp":
        case "ssc":
        case "sr":
        case "scp":
        case "scl":
        case "pr":
        case "ps":
            win(move, compchoice);
            break;
        case "pp":
        case "rr":
        case "scsc":
        case "ll":
        case "ss":
            draw(move);
            break;
        default:
            lose(move, compchoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("sc");
    })
    lizard_div.addEventListener('click', function(){
        game("l");
    })
    spock_div.addEventListener('click', function(){
        game("s");
    })
}

main();