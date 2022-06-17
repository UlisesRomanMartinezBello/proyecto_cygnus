const listaProductos = document.querySelector('#lista-productos');
const totalProductos = document.querySelector('#total');
const btnPagar = document.querySelector('#btnPagar');
let carrito = [];

cargarDocumento();

function cargarDocumento() {
    document.addEventListener('DOMContentLoaded', mostrarProductos);
    btnPagar.addEventListener('click', pagarProductos);
    window.addEventListener('load', aumentarProducto);
    document.addEventListener('DOMContentLoaded', calcularTotal);
    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    });
}

function mostrarProductos() {
    let numeroProductos = JSON.parse(localStorage.getItem('carrito'));

    if (numeroProductos === null) {
        document.getElementById('table-carrito').remove();
        const divCarritoVacio = document.createElement('div');
        divCarritoVacio.classList = 'd-flex flex-column align-items-center h3 pt-5';
        divCarritoVacio.textContent = 'No hay productos en el carrito';

        const imagenCarritoVacio = document.createElement('img');
        imagenCarritoVacio.src = '../assets/img/img-system/carrito.svg';
        imagenCarritoVacio.classList = 'img-fluid pt-3';
        imagenCarritoVacio.width = 300;

        divCarritoVacio.appendChild(imagenCarritoVacio);
        document.getElementById('carrito-vacio').appendChild(divCarritoVacio);
    } else {
        numeroProductos.forEach((producto, index) => {
            const plantilla = `<tr>
                                <td scope="row">
                                    <div class="d-flex">
                                        <div>
                                            <img src="../assets/img/img-inde/${producto.imagen}" class="img-fluid img-carrito d-none d-sm-block">
                                        </div>
                                        <div class="px-3">
                                            <h6 class="font-weight-bold">${producto.nombre}</h6>
                                            <p class="text-principal font-weight-bold">$MXN ${producto.precio}</p>
                                            <strike class="small">$MXN ${producto.precio * 1.5}</strike>
                                            <button type="button" class="d-block bg-transparent btn-talla my-1">${producto.talla}</button>
                                        </div>
                                    </div>
                                </td>       
                                <td>
                                    <div class="btn-group rounded" role="group">
                                        <button type="button" class="btn btn-light border btn-disminuir" id="${index + 1}" data-id=${producto.id}>-</button>
                                        <button type="button" class="btn btn-light border btn-cantidad" id="${index + 1}">${producto.cantidad}</button>
                                        <button type="button" class="btn btn-light border btn-aumentar" id="${index + 1}" data-id=${producto.id}>+</button>
                                    </div>
                                </td>
                                <td class="font-weight-bold">$MXN ${producto.total}</td>
                            </tr>`;
            listaProductos.innerHTML += plantilla;
        });
    }


}

function calcularTotal() {
    let numeroProductos = JSON.parse(localStorage.getItem('carrito'));

    if (numeroProductos != null) {
        const preciosProductos = numeroProductos.map(producto => producto.total);
        const total = preciosProductos.reduce((a, b) => a + b);
        totalProductos.textContent = `$MXN ${total}`;
    } else {

        const contenedorTotal = document.getElementById('contenedor-total');
        contenedorTotal.children[0].remove();

        const cardComprarProductos = document.createElement('div');
        cardComprarProductos.classList = 'card p-4 p-lg-5 card-radius height-auto';
        const tituloComprarProductos = document.createElement('h2');
        tituloComprarProductos.classList = 'font-weight-bold text-center h5';
        tituloComprarProductos.textContent = 'Agrega productos al carrito';

        const btnComprarProductos = document.createElement('a');
        btnComprarProductos.href = 'productos.html';
        btnComprarProductos.classList = 'btn btn-principal btn-block';
        btnComprarProductos.textContent = 'Ver productos';

        cardComprarProductos.appendChild(tituloComprarProductos);
        cardComprarProductos.appendChild(btnComprarProductos);
        contenedorTotal.appendChild(cardComprarProductos);
    }
}

function aumentarProducto() {
    const btnCantidad = document.querySelectorAll('.btn-cantidad');
    const btnAumentar = document.querySelectorAll('.btn-aumentar');
    const btnDisminuir = document.querySelectorAll('.btn-disminuir');

    btnDisminuir.forEach(boton => {
        boton.addEventListener('click', () => {
            let btnId = boton.id;
            let idProducto = parseInt(boton.getAttribute('data-id'));
            btnCantidad.forEach(btn => {
                if (btnId == btn.id) {
                    if (parseInt(btn.textContent) === 1) {
                        btn.setAttribute('disabled');
                    }
                    btn.textContent = parseInt(btn.textContent) - 1;
                    asignarCantidadProducto(idProducto, 'Disminuir');
                    calcularTotal();
                    mostrarProductos();
                }
            })
        });
    });

    btnAumentar.forEach(boton => {
        boton.addEventListener('click', () => {
            let btnId = boton.id;
            let idProducto = parseInt(boton.getAttribute('data-id'));
            btnCantidad.forEach(btn => {
                if (btnId == btn.id) {
                    btn.textContent = parseInt(btn.textContent) + 1;
                    asignarCantidadProducto(idProducto, 'Aumentar');
                    calcularTotal();
                    mostrarProductos();
                }
            })
        });
    })
}

function asignarCantidadProducto(idProducto, operacion) {
    carrito.forEach(producto => {
        if (producto.id === idProducto) {
            if (operacion === 'Aumentar') {
                producto.cantidad = producto.cantidad + 1;
                producto.total = producto.precio * producto.cantidad;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                limpiarProductos();
            } else {
                producto.cantidad = producto.cantidad - 1;
                producto.total = producto.precio * producto.cantidad;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                limpiarProductos();
            }
        }
    })
}

function pagarProductos() {
    const loaderPay = document.createElement('span');
    loaderPay.classList = 'spinner-border spinner-border-sm';
    btnPagar.textContent = 'PAGANDO ';
    btnPagar.appendChild(loaderPay);

    const iconoPagado = document.createElement('i');
    iconoPagado.classList = 'fa-solid fa-check';

    setTimeout(() => {
        loaderPay.remove();
        btnPagar.textContent = 'PAGADO ';
        btnPagar.appendChild(iconoPagado);
        vaciarCarrito();
    }, 1000);

    localStorage.clear();

}

function vaciarCarrito() {
    document.querySelector('.table-responsive-sm').remove();
    const compraDiv = document.createElement('div');
    compraDiv.classList = 'text-center';

    const mensaje = document.createElement('p');
    mensaje.classList = 'h2 font-weight-bold';
    mensaje.textContent = 'Muchas gracias por su compra!!!';

    const imagen = document.createElement('img');
    imagen.src = '../assets/img/img-system/compra-exitosa.svg';
    imagen.classList = 'img-fluid pb-4';
    imagen.width = '300';

    const botonIndex = document.createElement('a');
    botonIndex.classList = 'btn btn-principal mt-2';
    botonIndex.textContent = 'Volver al inicio';
    botonIndex.href = '../index.html';

    compraDiv.appendChild(imagen);
    compraDiv.appendChild(mensaje);
    compraDiv.appendChild(botonIndex);
    document.querySelector('#tabla-carrito').appendChild(compraDiv);
}

function limpiarProductos() {
    while (listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }
}