let dice = document.querySelectorAll('img');

rand = []

for(let i = 0; i < dice.length; i++) {
    rand[i] = Math.floor((Math.random() * 6) + 1);
    dice[i].src = "./images/dice" + rand[i] + ".png";
}

let heading = document.querySelector('h1');

if(rand[0] > rand[1]) {
    heading.innerHTML = "Player 1 Wins! 🚩";
} else if(rand[0] === rand[1]) {
    heading.innerHTML = "Tie";
} else {
    heading.innerHTML = "Player 2 Wins! 🚩"
}