var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var card = document.querySelector(".gradient-card");
var color1_hex = document.querySelector(".color1_hex");
var color2_hex = document.querySelector(".color2_hex");

function setGradient(){
  card.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  hex.textContent = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  rgb.textContent = card.style.background + ";"

  color1_hex.innerHTML = color1.value;
  color2_hex.innerHTML = color2.value;
  color1_hex.style.color = color1.value;
  color2_hex.style.color = color2.value;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
