const buscador = document.querySelector('#barraBuscarCursor');
const resultadosBusqueda = document.querySelector('#resultados-busqueda');
let urlImagenes = '';
let urlProducto = '';

cargarEventos();

function cargarEventos() {
    buscador.addEventListener('keyup', buscarProductos);
    document.addEventListener('click', limpiarResultadosBusqueda);
    document.addEventListener('DOMContentLoaded', obtenerEnlaces);
    document.addEventListener('DOMContentLoaded', numeroProductosCarrito);
}

function obtenerEnlaces() {
    let index = window.location.href.split('/')[3];
    if (index === 'index.html') {
        urlImagenes = 'assets/img/img-producto/';
        urlProducto = 'templates/producto-Individual.html'

    } else {
        urlImagenes = '../assets/img/img-producto/';
        urlProducto = '../templates/producto-Individual.html';
    }
}

function buscarProductos(event) {
    const productosSeleccionados = [];
    const contenedorBuscador = document.createElement('div');
    contenedorBuscador.classList = 'position-absolute d-flex flex-column w-75 bg-light z-index-2000';
    const textoBusqueda = event.target.value.toLowerCase();
    if (textoBusqueda != '') {
        for (let i = 0; i < productos.length; i++) {
            const nombreProducto = productos[i].nombre.toLowerCase();
            const colorProducto = productos[i].color;
            const idProducto = productos[i].id;
            const imagenProducto = productos[i].imagenes[0];
            const tipoProducto = productos[i].tipo;
            if (nombreProducto.includes(textoBusqueda)) {
                productosSeleccionados.push({ id: idProducto, nombre: nombreProducto, color: colorProducto, imagen: imagenProducto, tipo: tipoProducto });
            }
        }

        const productosMostrados = productosSeleccionados.slice(0, productosSeleccionados.length < 5 ? productosSeleccionados.length : 5);

        productosMostrados.forEach(producto => {
            const enlaceProducto = document.createElement('a');
            enlaceProducto.href = `${urlProducto}?id=${producto.id}`;
            enlaceProducto.textContent = `${producto.nombre}`;
            enlaceProducto.classList = 'd-flex text-dark py-3 flex-row-reverse justify-content-center option-search align-items-center';

            const imagenProducto = document.createElement('img');
            imagenProducto.src = `${urlImagenes + producto.imagen}`;
            imagenProducto.classList = 'img-fluid mr-2';
            imagenProducto.width = 50;
            enlaceProducto.appendChild(imagenProducto);

            contenedorBuscador.appendChild(enlaceProducto);
        });

        resultadosBusqueda.appendChild(contenedorBuscador);

    } else {
        limpiarResultadosBusqueda();
    }
}

function limpiarResultadosBusqueda() {
    while (resultadosBusqueda.firstChild) {
        resultadosBusqueda.removeChild(resultadosBusqueda.firstChild);
    }
}

function numeroProductosCarrito() {
    let numeroProductos = JSON.parse(localStorage.getItem('carrito'));
    if (numeroProductos != null) {
        const badgeProductos = document.createElement('span');
        badgeProductos.textContent = numeroProductos.length;
        badgeProductos.classList = 'badge badge-light rounded-circle position-absolute small';
        document.querySelector('.icono-carrito').appendChild(badgeProductos);   
    }
}