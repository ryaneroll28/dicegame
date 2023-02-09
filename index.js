
function resetButton() {
    document.querySelector('h2').innerHTML = "Let's Play Dice!🥳 <br> Refresh to Play!";
    document.querySelectorAll('img')[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll('img')[1].setAttribute("src", "images/dice6.png");
}

randomNumber1 = Math.floor(Math.random()*6)+1;
randomImage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll('img')[0].setAttribute("src", randomImage1);

randomNumber2 = Math.floor(Math.random()*6)+1;
randomImage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll('img')[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h2').innerHTML = "Player 1 Wins! 💦"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h2').innerHTML = "Player 2 Wins! 💦"
} else {
    document.querySelector('h2').innerHTML = "The Game is Draw! 💦"
}
