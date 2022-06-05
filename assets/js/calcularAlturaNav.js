const style = document.documentElement.style

let element = document.getElementById('divNavSuperior');
let element1 = document.getElementById('divNavInferior');

let alturaDiv = element.clientHeight;
let alturaDiv1 = element1.clientHeight;

let alturaNav = alturaDiv + alturaDiv1;

document.documentElement.style.setProperty('--altura', alturaDiv + "px");
document.documentElement.style.setProperty('--alturaNav', alturaNav + "px");


console.log(alturaDiv);
console.log(alturaDiv1);
console.log(alturaNav);
