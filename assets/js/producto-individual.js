const imagenPrincipal = document.querySelector('#imagen-principal');
const imagenesProducto = document.querySelector('#imagenes-productos');
const productoTitulo = document.querySelector('#producto-titulo');
const productoDescripcion = document.querySelector('#producto-descripcion');
const productoPrecio = document.querySelector('#producto-precio');
const btnCarrito = document.querySelector('#agregar-carrito');
const checkTallas = document.querySelectorAll('.check-talla');
const pathImagenes = '../assets/img/img-producto/';
const urlProductos = 'http://127.0.0.1:5500/templates/productos.html';
const detallesProducto = { id: 0, nombre: '', precio: 0, imagen: '', talla: '', cantidad: 0 };
let carrito = [];

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', mostrarProducto);
    document.addEventListener('DOMContentLoaded', seleccionarTalla);
    document.addEventListener('DOMContentLoaded', numeroProductosCarrito)
    btnCarrito.addEventListener('click', agregarCarrito);
    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    });
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
    productoTitulo.textContent = `${idProducto.tipo} ${idProducto.nombre}`;
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
    }

    urlProducto = urlProducto - 1;

    if (detallesProducto.talla === '') {
        const textoTalla = document.querySelector('#texto-talla');
        textoTalla.textContent = 'Selecciona una talla primero';
        textoTalla.classList = 'alert alert-warning';
    } else {
        detallesProducto.id = productos[urlProducto].id;
        detallesProducto.nombre = productos[urlProducto].nombre;
        detallesProducto.precio = productos[urlProducto].precio;
        detallesProducto.imagen = productos[urlProducto].imagenes[0];
        detallesProducto.cantidad = detallesProducto.cantidad + 1;
        carrito = [...carrito, detallesProducto];
        guardarProductoCarrito();
    }
}

function seleccionarTalla() {
    checkTallas.forEach(talla => {
        talla.addEventListener('click', () => {
            if (talla.parentNode.classList.contains('btn-talla-seleccionada')) {
                talla.parentNode.classList.remove('btn-talla-seleccionada');
            }
            talla.parentNode.classList.add('btn-talla-seleccionada');
            detallesProducto.talla = talla.value;
        });
    });
}

function guardarProductoCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    const productoAgregado = document.createElement('div');
    productoAgregado.textContent = 'Producto agregado al carrito';
    productoAgregado.classList = 'alert alert-success';
    document.querySelector('#producto-agregado').appendChild(productoAgregado);

    numeroProductosCarrito();

    setTimeout(() => {
        productoAgregado.remove();
    }, 3000);
}