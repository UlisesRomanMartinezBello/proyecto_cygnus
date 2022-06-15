const style = document.documentElement.style

let element = document.getElementById('navLogoUser');
let alturaDiv = element.clientHeight;

// let prueba = document.querySelector(".buscar");

// prueba.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("dando click en buscar");
// });

// let element1 = document.getElementById('etiquetaH1')
// let alturaH1 = element1.clientHeight;

// let alturaFinal = alturaDiv;

// console.log(alturaDiv);
// console.log(alturaH1);

alturaDiv = alturaDiv;

document.documentElement.style.setProperty('--altura', alturaDiv + "px");

console.log(alturaDiv);
