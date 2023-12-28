var randomNumber1 = Math.floor(Math.random() * 6) + 1;   // 1-6

var randomDiceImg1 = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png;

var randomImgSource1 = "images/" + randomDiceImg1;  // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;  

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "images/" + randomDiceImg2;

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins 🚩";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩 ";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
