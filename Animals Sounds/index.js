//detecting button press
var NumberOfDromButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfDromButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//detecting keyboard press
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});
function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sound/angry-cat.wav");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sound/baby-goat.wav");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sound/baby-monkey.wav");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sound/big-pig.wav");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sound/dog-barking.wav");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sound/flying-bee.wav");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sound/bird-flying.wav");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
