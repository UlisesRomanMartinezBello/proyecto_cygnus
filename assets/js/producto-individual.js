const imagenPrincipal = document.querySelector('#imagen-principal');
const imagenesProducto = document.querySelector('#imagenes-productos');
const productoTitulo = document.querySelector('#producto-titulo');
const productoDescripcion = document.querySelector('#producto-descripcion');
const productoPrecio = document.querySelector('#producto-precio');
const btnCarrito = document.querySelector('#agregar-carrito');
const checkTallas = document.querySelectorAll('.check-talla');
const pathImagenes = '../assets/img/img-producto/';
const urlProductos = 'http://127.0.0.1:5500/templates/productos.html';
const detallesProducto = { nombre: '', precio: 0, imagen: '', talla: '', cantidad: 0 };

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', mostrarProducto);
    document.addEventListener('DOMContentLoaded', seleccionarTalla);
    btnCarrito.addEventListener('click', agregarCarrito)
}

function mostrarProducto() {
    let urlProducto = window.location.href;
    if (urlProducto.includes('?')) {
        urlProducto = urlProducto.split('?')[1].split('=')[1];
    } else {
        window.location = urlProductos;
    }

    urlProducto = urlProducto - 1;

    mostrarImagenes(productos[urlProducto]);
    mostrarInformacion(productos[urlProducto]);
    mostrarImagenPrincipal(productos[urlProducto]);
}

function mostrarImagenes(idProducto) {
    idProducto.imagenes.forEach(imagenes => {
        const imagenProducto = document.createElement('img');
        imagenProducto.classList = 'img-fluid rounded mx-2 img-producto w-75';
        imagenProducto.src = `${pathImagenes}/${imagenes}`;
        imagenesProducto.appendChild(imagenProducto);
    });
}

function mostrarImagenPrincipal(idProducto) {
    const imagenPrincipalHTML = document.createElement('img');
    imagenPrincipalHTML.classList = 'rounded img-fluid';
    imagenPrincipalHTML.src = `${pathImagenes}/${idProducto.imagenes[0]}`;
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

    checkTallas.forEach(talla => {
        if (idProducto.talla.includes(talla.value)) {
            talla.parentNode.classList.remove('d-none');
        }
    });

}

function agregarCarrito() {
    let urlProducto = window.location.href;
    if (urlProducto.includes('?')) {
        urlProducto = urlProducto.split('?')[1].split('=')[1];
    } else {
        window.location = urlProductos;
    }
    detallesProducto.nombre = productos[urlProducto].nombre;
    detallesProducto.precio = productos[urlProducto].precio;
    detallesProducto.imagen = productos[urlProducto].imagenes[0];
    detallesProducto.cantidad = detallesProducto.cantidad + 1;

    console.log(detallesProducto);
}


function seleccionarTalla() {
    checkTallas.forEach(talla => {
        talla.addEventListener('click', () => {
            if (talla.parentElement.classList.contains('btn-talla-seleccionada')) {
                talla.parentElement.classList.remove('btn-talla-seleccionada');
            } else {
                talla.parentElement.classList.add('btn-talla-seleccionada');
            }
        });
    });
}