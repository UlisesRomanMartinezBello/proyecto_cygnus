const divCarousel = document.getElementById('divCarousel');
const divCarousel1 = document.getElementById('divCarousel1');
const divCarousel2 = document.getElementById('divCarousel2');

document.addEventListener('DOMContentLoaded', () => {
    // crearGliderSudadera();
});


function crearGliderSudadera (){
    // console.log(divCarousel);
    // console.log(productos[0]);
    let arregloSudaderas = [];
    let arregloSudaderas2 = [];
    let arregloPlayeras = [];
    let arregloPlayeras2 = [];
    let arregloHoodies = [];
    let arregloHoodies2 = [];

    for(let x=0; x<productos.length; x++){ 
        let src = 'assets/img/img-producto/';
        let aux = productos[x].imagenes[0];
        src = src+aux;
        let titulo = productos[x].nombre;  
        // console.log(src);
        if( productos[x].tipo == 'Playera'){
            arregloPlayeras.push(src);
            arregloPlayeras2.push(src);
            arregloPlayeras2.push(titulo);
        }
        if( productos[x].tipo == 'Sudadera'){
            arregloSudaderas.push(src);
            arregloSudaderas2.push(src);
            arregloSudaderas2.push(titulo);
        }
        if( productos[x].tipo == 'Hoodie'){
            arregloHoodies.push(src);
            arregloHoodies2.push(src);
            arregloHoodies2.push(titulo);
        }  
    }
    arregloSudaderas.sort(function() { return Math.random() - 0.5 });
    arregloPlayeras.sort(function() { return Math.random() - 0.5 });
    arregloHoodies.sort(function() { return Math.random() - 0.5 });

    for(let x=0; x<arregloSudaderas.length; x++){
        let carousel__elemento = document.createElement('div');
        let img = document.createElement('img');
        let titulo = document.createElement('p');
        let descripcion = document.createElement('p');
        let textTitulo;
        let textDescripcion;
        console.log(x);
        aux = arregloSudaderas[x];
        console.log(aux);
        
        titulo.setAttribute('class','tituloGlider');

        carousel__elemento.setAttribute('class','carousel__elemento');
        img.setAttribute('class','img-carousel');
        img.setAttribute('src',aux);

        for(let x=0; x<arregloSudaderas2.length;x++){
            if(aux == arregloSudaderas2[x]){
                console.log('encon');
                textTitulo = document.createTextNode(arregloSudaderas2[x+1]);
                console.log(textTitulo);
                console.log(textDescripcion);
            }
        }
        divCarousel.appendChild(carousel__elemento);
        carousel__elemento.appendChild(img);
        carousel__elemento.appendChild(titulo);
        carousel__elemento.appendChild(descripcion);
        titulo.appendChild(textTitulo);
    }

    for(let x=0; x<arregloPlayeras.length; x++){
        let carousel__elemento = document.createElement('div');
        let img = document.createElement('img');
        let titulo = document.createElement('p');
        let descripcion = document.createElement('p');
        let textTitulo;
        let textDescripcion;
        console.log(x);
        aux = arregloPlayeras[x];
        console.log(aux);
        

        carousel__elemento.setAttribute('class','carousel__elemento');
        img.setAttribute('class','img-carousel');
        img.setAttribute('src',aux);

        for(let x=0; x<arregloPlayeras2.length;x++){
            if(aux == arregloPlayeras2[x]){
                console.log('encon');
                textTitulo = document.createTextNode(arregloPlayeras2[x+1]);
                console.log(textTitulo);
                console.log(textDescripcion);
            }
        }
        divCarousel1.appendChild(carousel__elemento);
        carousel__elemento.appendChild(img);
        carousel__elemento.appendChild(titulo);
        carousel__elemento.appendChild(descripcion);
        titulo.setAttribute('class','tituloGlider');
        titulo.appendChild(textTitulo);
    }

    for(let x=0; x<arregloHoodies.length; x++){
        let carousel__elemento = document.createElement('div');
        let img = document.createElement('img');
        let titulo = document.createElement('p');
        let descripcion = document.createElement('p');
        let textTitulo;
        let textDescripcion;
        console.log(x);
        aux = arregloHoodies[x];
        console.log(aux);
        

        carousel__elemento.setAttribute('class','carousel__elemento');
        img.setAttribute('class','img-carousel');
        img.setAttribute('src',aux);

        for(let x=0; x<arregloHoodies2.length;x++){
            if(aux == arregloHoodies2[x]){
                console.log('encon');
                textTitulo = document.createTextNode(arregloHoodies2[x+1]);
                console.log(textTitulo);
                console.log(textDescripcion);
            }
        }
        divCarousel2.appendChild(carousel__elemento);
        carousel__elemento.appendChild(img);
        carousel__elemento.appendChild(titulo);
        carousel__elemento.appendChild(descripcion);
        titulo.setAttribute('class','tituloGlider');
        titulo.appendChild(textTitulo);
    }
    
}
