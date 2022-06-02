const mapa = document.getElementById('mapa');
const tiendas = document.querySelectorAll('.tienda');

document.addEventListener('DOMContentLoaded', () => {
    buscarTiendas();
});

function buscarTiendas() {
    tiendas.forEach(tienda => {
        tienda.addEventListener('click', () => {
            mapa.src = tienda.getAttribute('data-mapa');
        });
    });
}