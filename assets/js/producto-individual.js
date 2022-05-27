const imagenPrincipal = document.querySelector('#imagen-principal');
const imagenesProducto = document.querySelector('#imagenes-productos');
const productoTitulo = document.querySelector('#producto-titulo');
const productoDescripcion = document.querySelector('#producto-descripcion');
const productoPrecio = document.querySelector('#producto-precio');
const tallas = document.querySelector('#tallas');
const urlImagenes = '../assets/img/img-producto/';
const idProducto = productos[2];

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagenes();
    mostrarImagenPrincipal();
    mostrarInformacion();
});

function mostrarImagenes() {
    idProducto.imagenes.forEach(imagenes => {
        const imagenProducto = document.createElement('img');
        imagenProducto.classList = 'pb-3 img-fluid rounded mx-2 img-producto w-75';
        imagenProducto.src = `${urlImagenes}/${imagenes}`;
        imagenesProducto.appendChild(imagenProducto);
    });
}

function mostrarImagenPrincipal() {
    const imagenPrincipalHTML = document.createElement('img');
    imagenPrincipalHTML.classList = 'rounded img-fluid';
    imagenPrincipalHTML.src = `${urlImagenes}/${idProducto.imagenes[0]}`;
    imagenPrincipal.appendChild(imagenPrincipalHTML);

    document.querySelectorAll('.img-producto').forEach(imagen => {
        imagen.addEventListener('click', () => {
            imagenPrincipal.lastChild.src = imagen.src;
        });
    });
}

function mostrarInformacion() {
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