let section= document.querySelector("#S");
console.log(section)
let btn1 = document.querySelector("#btnOcultar");

function ocultarSection() {
  section.style.display = "none";
}
btn1.onclick = ocultarSection;

let btn2 = document.querySelector("#btnMostrar");

function mostrarSection() {
  section.style.display = "block";
}
btn2.onclick = mostrarSection;

let btn3 = document.querySelector("#btnColor");

function colorSection() {
  section.style.backgroundColor = "blue";
  section.style.display = "block";
}
btn3.onclick = colorSection;

