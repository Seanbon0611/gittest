var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var numberGen = document.querySelector("#ranGen");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomNumber() {
	var num = "";
	num = Math.floor(Math.random() * 16777216).toString(16);
		while (num.length < 6) {
			num = "0"+ num
		} 
		return "#"+ num;
	
}
function randomColor() {
	color1.value = randomNumber();
	color2.value = randomNumber();
	setGradient();
}
numberGen.addEventListener("click", randomColor);
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);