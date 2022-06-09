const buscador = document.querySelector('#barraBuscarCursor');
const resultadosBusqueda = document.querySelector('#resultados-busqueda');

buscador.addEventListener('keyup', buscarProductos);
document.addEventListener('click', limpiarResultadosBusqueda);

function buscarProductos(event) {
    const productosSeleccionados = [];
    const contenedorBuscador = document.createElement('div');
    contenedorBuscador.classList = 'position-absolute d-flex flex-column w-100 bg-light z-index-2000';
    const textoBusqueda = event.target.value.toLowerCase();
    if (textoBusqueda != '') {
        for (let i = 0; i < productos.length; i++) {
            const nombreProducto = productos[i].nombre.toLowerCase();
            const colorProducto = productos[i].color;
            const idProducto = productos[i].id;
            if (nombreProducto.includes(textoBusqueda)) {
                productosSeleccionados.push({ id: idProducto, nombre: nombreProducto, color: colorProducto });
            }
        }

        const productosMostrados = productosSeleccionados.slice(0, 5);

        productosMostrados.forEach(producto => {
            const enlaceProducto = document.createElement('a');
            enlaceProducto.href = `producto-Individual.html?id=${producto.id}`;
            enlaceProducto.textContent = producto.nombre;
            enlaceProducto.classList = 'd-block text-center text-dark border border-dark py-3';
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