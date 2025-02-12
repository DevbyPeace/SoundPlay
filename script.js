/////////// ELements
const sound = document.querySelector(".audio");
const lightBulb = document.getElementById("btnlight");
const body = document.querySelector("body");
const header = document.querySelector("header");

//////////// FUNCTIONS

//   Audio
const newSound = function () {
  let audio = new Audio("Voicy_Really Nigga.mp3");
  audio.play();
};

// Bg color
const changebg = function () {
  let currentColor = getComputedStyle(body).backgroundColor;
  if (currentColor === "rgb(0, 0, 0)") {
    body.style.backgroundColor = "white";
    header.style.color = "black";
    lightBulb.style.color = "black";
    sound.style.backgroundColor = "black";
    sound.style.color = "white";

  } else {
    body.style.backgroundColor = "black";
    header.style.color = "white";
    lightBulb.style.color = "white";
    sound.style.backgroundColor = "white";
    sound.style.color = "black";
  }
};

////////////  BUTTONS

// sound
sound.addEventListener("click", newSound);

// switch
lightBulb.addEventListener("click", changebg);
