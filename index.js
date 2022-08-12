
function randomDiceNumber(){
  //Outputs random num between 1 and 6
  return Math.ceil(Math.random()*6);
}

function randomDiceImage(num){
  var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
  imgSrc = "images/" + images[num];
  return imgSrc;
}

function Display(){
  // Get random numbers and image srcs
  player1Num = randomDiceNumber();
  player2Num = randomDiceNumber();
  player1ImageSrc = randomDiceImage(player1Num-1);
  player2ImageSrc = randomDiceImage(player2Num-1);

  //Display Dice
  document.getElementsByClassName("img1")[0].setAttribute("src", player1ImageSrc);
  document.getElementsByClassName("img2")[0].setAttribute("src", player2ImageSrc);

  //Display Winner
  if(player1Num > player2Num){
    document.querySelector("h1").textContent = 	"🚩 Player 1 Wins!";
  }
  else if(player1Num < player2Num){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").textContent = "Draw!";
  }
}

Display();
