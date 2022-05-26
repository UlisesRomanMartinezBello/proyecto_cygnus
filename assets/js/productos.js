const productosHTML = document.querySelector('#productos');

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

function mostrarProductos() {
    productos.forEach(producto => {
        const plantilla = `<div class="col-sm-12 col-md-4 pb-4">
                                <div class="card" id="capa">
                                    <i class=" fa-solid fa-heart cora"></i>
                                    <button type="button" class="btn btn-carrito" id="mensaje">Añadir a carrito</button>
                                    <img src="../assets/img/img-producto/${producto.imagenes[0]}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <button type="button" class="btn btn-secondary boton-img">$${producto.precio}</button>
                                        <h5 class="card-title pt-3">${producto.nombre}</h5>
                                    </div>
                                </div>
                            </div>`;
    
        productosHTML.innerHTML += plantilla;
    });
}

function filtrarProductos() {
    
}