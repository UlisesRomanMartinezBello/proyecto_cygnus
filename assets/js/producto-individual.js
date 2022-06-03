const imagenPrincipal = document.querySelector('#imagen-principal');
const imagenesProducto = document.querySelector('#imagenes-productos');
const productoTitulo = document.querySelector('#producto-titulo');
const productoDescripcion = document.querySelector('#producto-descripcion');
const productoPrecio = document.querySelector('#producto-precio');
const tallas = document.querySelector('#tallas');
const urlImagenes = '../assets/img/img-producto/';

document.addEventListener('DOMContentLoaded', () => {
    mostrarProducto();
});

function mostrarProducto() {
    let urlProducto = window.location.href;
    if (urlProducto.includes('?')) {
        urlProducto = urlProducto.split('?')[1].split('=')[1];
    } else {
        window.location = 'http://127.0.0.1:5500/templates/productos.html';
    }

    urlProducto = urlProducto - 1;

    mostrarImagenes(productos[urlProducto]);
    mostrarInformacion(productos[urlProducto]);
    mostrarImagenPrincipal(productos[urlProducto]);
}

function mostrarImagenes(idProducto) {
    idProducto.imagenes.forEach(imagenes => {
        const imagenProducto = document.createElement('img');
        imagenProducto.classList = 'pb-3 img-fluid rounded mx-2 img-producto w-75';
        imagenProducto.src = `${urlImagenes}/${imagenes}`;
        imagenesProducto.appendChild(imagenProducto);
    });
}

function mostrarImagenPrincipal(idProducto) {
    const imagenPrincipalHTML = document.createElement('img');
    imagenPrincipalHTML.classList = 'rounded img-fluid';
    imagenPrincipalHTML.src = `${urlImagenes}/${idProducto.imagenes[0]}`;
    imagenPrincipal.appendChild(imagenPrincipalHTML);

    document.querySelectorAll('.img-producto').forEach(imagen => {
        imagen.addEventListener('mouseover', () => {
            imagenPrincipal.lastChild.src = imagen.src;
        });
        imagen.addEventListener('click', () => {
            imagenPrincipal.lastChild.src = imagen.src;
        });
    });
}

function mostrarInformacion(idProducto) {
    productoTitulo.textContent = idProducto.nombre;
    productoPrecio.textContent = `$MXN ${idProducto.precio}`;
    productoDescripcion.textContent = idProducto.descripcion;
    idProducto.talla.forEach(talla => {
        const botonTalla = document.createElement('input');
        botonTalla.classList = 'efecto mx-1';
        botonTalla.type = 'button';
        botonTalla.value = talla;
        tallas.appendChild(botonTalla);
    })
}

function agregarCarrito() {
    
}