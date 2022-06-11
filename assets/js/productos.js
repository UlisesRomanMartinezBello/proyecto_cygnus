const productosHTML = document.querySelector('#productos');
const formularioFiltrado = document.querySelector('#formulario-filtrado');
const checkBoxTalla = document.querySelectorAll('.check-talla');
const checkBoxColor = document.querySelectorAll('.check-color');
const rangoPrecio = document.querySelector('#rango-precio');
const mostrarPrecio = document.querySelector('#mostrar-precio');
let listaProductos = [...productos]; // lista productos deben ser traidas desde la API
const datosFiltro = { tipo: '', talla: [], color: [], precio: 0, };

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', filtrarTipo);
    document.addEventListener('DOMContentLoaded', mostrarTallaSeleccionada);
    document.addEventListener('DOMContentLoaded', mostrarColorSeleccionado);
    formularioFiltrado.addEventListener('submit', filtrarProductos);
    rangoPrecio.addEventListener('click', mostrarRangoPrecio);
    document.addEventListener('DOMContentLoaded', mostrarBotonCarrito);
}

function mostrarProductos(productos) {
    productos.forEach(producto => {
        const columna = document.createElement('div');
        columna.classList = 'col-sm-6 col-md-6 col-lg-4 pb-4 d-flex justify-content-center';
        columna.dataset.id = producto.id;

        const card = document.createElement('div');
        card.classList = 'card rounded align-items-center';

        const cardHeader = document.createElement('div');
        cardHeader.classList = 'card-header d-flex p-0 justify-content-center align-items-center';

        const iconoCorazon = document.createElement('a');
        iconoCorazon.classList = 'fa-solid fa-heart cora h4 text-dark';

        const btnAgregarCarrito = document.createElement('a');
        btnAgregarCarrito.classList = 'btn btn-principal position-absolute btn-carrito-compras d-none';
        btnAgregarCarrito.textContent = 'Ver producto';
        btnAgregarCarrito.href = `producto-Individual.html?id=${producto.id}`;
        btnAgregarCarrito.dataset.id = producto.id;

        const imgProducto = document.createElement('img');
        imgProducto.classList = 'card-img-top';
        imgProducto.src = `../assets/img/img-producto/${producto.imagenes[0]}`;

        const cardBody = document.createElement('div');
        cardBody.classList = 'card-body h-100 d-block';

        const btnPrecio = document.createElement('button');
        btnPrecio.classList = 'btn btn-transparent btn-block';
        btnPrecio.textContent = `$${producto.precio}`;

        const nombreProducto = document.createElement('p');
        nombreProducto.classList = 'h5 text-center font-weight-bold d-block';
        nombreProducto.textContent = `${producto.nombre}`;

        cardBody.appendChild(nombreProducto);
        cardBody.appendChild(btnPrecio);
        cardHeader.appendChild(iconoCorazon);
        cardHeader.appendChild(btnAgregarCarrito);
        cardHeader.appendChild(imgProducto);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        columna.appendChild(card);
        productosHTML.appendChild(columna);
    });
    mostrarBotonCarrito();
}

function mostrarBotonCarrito() {
    const cardsProductos = productosHTML.children;
    const btnAgregarCarrito = document.querySelectorAll('.btn-carrito-compras');
    const productos = [...cardsProductos];
    productos.forEach(producto => {
        producto.addEventListener('mouseover', () => {
            btnAgregarCarrito.forEach(btnCarrito => {
                if (producto.dataset.id === btnCarrito.dataset.id) {
                    btnCarrito.classList.remove('d-none');
                    btnCarrito.classList.add('d-block');
                }
            });
        });

        producto.addEventListener('mouseout', () => {
            btnAgregarCarrito.forEach(btnCarrito => {
                btnCarrito.classList.remove('d-block');
                btnCarrito.classList.add('d-none');
            });
        })
    });
}

function filtrarTipo() {
    let tipoProduto = window.location.href;
    if (tipoProduto.includes('?')) {
        tipoProduto = tipoProduto.split('?')[1].split('=')[1];
    }
    switch (tipoProduto) {
        case 'playera':
            const playeras = listaProductos.filter(playera => playera.tipo === 'playera' || playera.tipo === 'Playera');
            playeras.sort(() => Math.random() - 0.5);
            mostrarProductos(playeras);
            mostrarColoresTipo(playeras);
            datosFiltro.tipo = 'Playera';
            break;

        case 'hoodie':
            const hoodies = listaProductos.filter(playera => playera.tipo === 'hoodie' || playera.tipo === 'Hoodie');
            hoodies.sort(() => Math.random() - 0.5);
            mostrarProductos(hoodies);
            mostrarColoresTipo(hoodies);
            datosFiltro.tipo = 'Hoodie';
            break;

        case 'sudadera':
            const sudaderas = listaProductos.filter(playera => playera.tipo === 'sudadera' || playera.tipo === 'Sudadera');
            sudaderas.sort(() => Math.random() - 0.5);
            mostrarProductos(sudaderas);
            mostrarColoresTipo(sudaderas);
            datosFiltro.tipo = 'Sudadera';
            break;

        default:
            listaProductos.sort(() => Math.random() - 0.5);
            mostrarProductos(listaProductos);
            mostrarColoresTipo(productos);
            datosFiltro.tipo = '';
            break;
    }
}

function filtrarProductos(event) {
    event.preventDefault();

    // Resetar talla y color
    datosFiltro.talla = [];
    datosFiltro.color = [];

    // Obtener el valor del input range
    datosFiltro.precio = parseInt(rangoPrecio.value);

    // Obtener los valores de la talla
    checkBoxTalla.forEach(check => {
        if (check.parentNode.classList.contains('btn-talla-seleccionada')) {
            datosFiltro.talla.push(check.value);
        }
    });

    // Obtener los valores del color
    checkBoxColor.forEach(check => {
        if (check.parentNode.classList.contains('btn-color-seleccionado')) {
            datosFiltro.color.push(check.value);
        }
    });

    // Resetar estilos al no encontrar productos
    productosHTML.classList.remove('flex-column', 'align-content-center');

    let resultados = [...listaProductos];

    // Filtrar por tipo
    if (datosFiltro.tipo != '') {
        resultados = listaProductos.filter(producto => producto.tipo === datosFiltro.tipo);
    }

    // Filtrar por precio
    resultados = resultados.filter(producto => producto.precio <= datosFiltro.precio);

    // Filtrar por color
    let coloresFiltrados = new Set();

    for (let i = 0; i < datosFiltro.color.length; i++) {
        resultados.forEach(producto => {
            if (producto.color === datosFiltro.color[i]) {
                coloresFiltrados.add(producto);
            }
        });
    }

    if (coloresFiltrados.size > 0) {
        resultados = [...coloresFiltrados];
    }

    // Filtrar por talla
    let tallasFiltradas = new Set();

    for (let i = 0; i < datosFiltro.talla.length; i++) {
        resultados.forEach(producto => {
            producto.talla.forEach(talla => {
                if (talla === datosFiltro.talla[i]) {
                    tallasFiltradas.add(producto);
                }
            });
        });
    }

    if (tallasFiltradas.size > 0) {
        resultados = [...tallasFiltradas];
    }

    resultados = resultados.sort(() => Math.random() - 0.5);

    if (resultados.length === 0) {
        limpiarHTML();
        sinResultados();
    } else {
        limpiarHTML();
        mostrarProductos(resultados);
    }
}

function mostrarRangoPrecio() {
    mostrarPrecio.textContent = `$${rangoPrecio.value}`;
}

function mostrarTallaSeleccionada() {
    checkBoxTalla.forEach(check => {
        check.addEventListener('click', () => {
            if (check.parentNode.classList.contains('btn-talla-seleccionada')) {
                check.parentNode.classList.remove('btn-talla-seleccionada');
                check.parentNode.classList.add('btn-talla');
            } else {
                check.parentNode.classList.add('btn-talla-seleccionada');
            }
        });
    });
}

function mostrarColorSeleccionado() {
    checkBoxColor.forEach(check => {
        check.addEventListener('click', () => {
            if (check.parentNode.classList.contains('btn-color-seleccionado')) {
                check.parentNode.classList.remove('btn-color-seleccionado');
                check.parentNode.classList.add('btn-color');
            } else {
                check.parentNode.classList.add('btn-color-seleccionado');
            }
        });
    });
}

function sinResultados() {
    productosHTML.classList.add('flex-column', 'align-content-center');
    const imagen = document.createElement('img');
    imagen.src = '../assets/img/img-system/sin-resultados.svg';
    imagen.classList = 'img-fluid text-center py-4';
    imagen.width = 350;

    const mensajeError = document.createElement('p');
    mensajeError.classList = 'h4';
    mensajeError.textContent = 'No se encontraron resultados';

    productosHTML.appendChild(imagen);
    productosHTML.appendChild(mensajeError);
}

function limpiarHTML() {
    while (productosHTML.firstChild) {
        productosHTML.removeChild(productosHTML.firstChild);
    }
}

function mostrarColoresTipo(tipoRopa) {
    const coloresDisponibles = new Set();
    tipoRopa.forEach(ropa => {
        coloresDisponibles.add(ropa.color);
    });

    checkBoxColor.forEach(btnColor => {
        coloresDisponibles.forEach(colorDisponible => {
            if (btnColor.value === colorDisponible) {
                btnColor.parentElement.classList.remove('d-none')
            }
        });
    });
}