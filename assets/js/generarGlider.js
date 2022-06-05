const carouselHoodie = document.getElementById('carouselHoodie');

// console.log(carouselHoodie);


crearGliderSudadera();


function crearGliderSudadera (){
    // console.log(divCarousel);
    // console.log(productos[0]);
    let arregloSudaderas = [];
    let arregloSudaderas2 = [];
    let arregloPlayeras = [];
    let arregloPlayeras2 = [];
    let arregloHoodies = [];
    let arregloHoodies2 = [];
    // const lista = document.createElement('ul');
    // lista.classList.add('glide__slides');
    // carouselHoodie.appendChild(lista);

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
    arregloHoodies.sort(function() { return Math.random() - 0.5 });
    // console.log(arregloHoodies);

    for(let x=0; x<arregloHoodies.length;x++){
        let li = document.createElement('li');
        li.setAttribute('class','cuadros');
        carouselHoodie.appendChild(li);
        let p = document.createElement('p');
        p.classList.add('titulo');
        li.appendChild(p);
        let img = document.createElement('img');
        img.classList.add('img');
        let aux = arregloHoodies[x];
        img.setAttribute('src',aux);
        li.appendChild(img);
        // let textoP = document.createTextNode()
        // console.log(aux);
        for(let x=0; x<arregloHoodies2.length;x++){
            if(aux == arregloHoodies2[x]){
                // console.log('encon');
                textTitulo = document.createTextNode(arregloHoodies2[x+1]);
                // console.log(textTitulo);
                p.appendChild(textTitulo);
            }
        }
    }
    
}