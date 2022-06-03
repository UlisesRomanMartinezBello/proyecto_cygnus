const listaProductos = document.querySelector('#lista-productos');
const totalProductos = document.querySelector('#total');
const btnPagar = document.querySelector('#btnPagar');
const productosSeleccionados = productos.filter(product => product.color === 'Negro' && product.precio <= 250);
const carrito = [...productosSeleccionados];

cargarDocumento();

function cargarDocumento() {
    document.addEventListener('DOMContentLoaded', mostrarProductos);
    btnPagar.addEventListener('click', pagarProductos);
    window.addEventListener('load', aumentarProducto);
    calcularTotal();
    asignarCantidad();
}

function mostrarProductos() {
    carrito.forEach((producto, index) => {
        const plantilla = `<tr>
                            <td scope="row">
                                <div class="d-flex">
                                    <div>
                                        <img src="../assets/img/img-producto/${producto.imagenes[0]}" class="img-fluid img-carrito d-none d-sm-block">
                                    </div>
                                    <div class="px-3">
                                        <h6 class="font-weight-bold">${producto.nombre}</h6>
                                        <p class="text-principal font-weight-bold">$MXN ${producto.precio}</p>
                                        <strike class="small">$MXN ${producto.precio * 1.5}</strike>
                                        <button type="button" class="d-block bg-transparent btn-talla my-1">CH</button>
                                        <button class="btn btn-principal btn-sm">
                                            <i class="fa-solid fa-xmark"></i>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </td>       
                            <td>
                                <div class="btn-group rounded" role="group">
                                    <button type="button" class="btn btn-light border btn-disminuir" id="${index + 1}">-</button>
                                    <button type="button" class="btn btn-light border btn-cantidad" id="${index + 1}">${producto.cantidad}</button>
                                    <button type="button" class="btn btn-light border btn-aumentar" id="${index + 1}">+</button>
                                </div>
                            </td>
                            <td class="font-weight-bold">$MXN ${producto.precio * producto.cantidad}</td>
                        </tr>`;
        listaProductos.innerHTML += plantilla;
    });
}

function calcularTotal() {
    // Este arreglo debe ser llamado del localStorage
    const preciosProductos = carrito.map(producto => producto.precio);
    const total = preciosProductos.reduce((a, b) => a + b);
    totalProductos.textContent = `$MXN ${total}`;
}

function aumentarProducto() {
    const btnCantidad = document.querySelectorAll('.btn-cantidad');
    const btnAumentar = document.querySelectorAll('.btn-aumentar');
    const btnDisminuir = document.querySelectorAll('.btn-disminuir');

    btnDisminuir.forEach(boton => {
        boton.addEventListener('click', () => {
            let btnId = boton.id;
            btnCantidad.forEach(btn => {
                if (btnId == btn.id) {
                    if (parseInt(btn.textContent) === 1) {
                        btn.setAttribute('disabled');
                    }
                    btn.textContent = parseInt(btn.textContent) - 1;

                }
            })
        });
    });

    btnAumentar.forEach(boton => {
        boton.addEventListener('click', () => {
            let btnId = boton.id;
            btnCantidad.forEach(btn => {
                if (btnId == btn.id) {
                    btn.textContent = parseInt(btn.textContent) + 1;
                }
            })
        });
    })
}

function asignarCantidad() {
    carrito.forEach(carrito => {
        carrito.cantidad = 1;
    });
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