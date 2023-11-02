//Generate two random numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Add two random numbers to the image path
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

//Display the winners
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉 player 01 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 02 wins 🎉";
} else {
  document.querySelector("h1").innerHTML = "🥳 Draw.! 🥳";
}

//Play button
document.querySelector(".btn").addEventListener("click", click);

function click() {
  location.reload();
}
