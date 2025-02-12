// ELements
const sound = document.querySelector(".audio");

//   Audio
const newSound = function () {
  let audio = new Audio("Voicy_Really Nigga.mp3");
  audio.play();
};



//  Buttons
sound.addEventListener("click", newSound);
