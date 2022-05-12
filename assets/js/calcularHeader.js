const style = document.documentElement.style

let element = document.getElementById('header');
let alturaDiv = element.clientHeight;

// let element1 = document.getElementById('etiquetaH1')
// let alturaH1 = element1.clientHeight;

// let alturaFinal = alturaDiv;

// console.log(alturaDiv);
// console.log(alturaH1);

document.documentElement.style.setProperty('--altura', alturaDiv + "px");


console.log(alturaDiv);

// :root{
//     --altura: 0px;
// }

// height: calc(100vh - var(--altura));