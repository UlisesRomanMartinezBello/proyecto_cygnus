const btnIniciar = document.querySelector('#btn-iniciar');
const btnRegistrar = document.querySelector('#btn-registrar');
const formIniciar = document.querySelector('#form-iniciar');
const formRegistrar = document.querySelector('#form-registrar');

btnIniciar.addEventListener('click', () => {
    formRegistrar.classList = 'd-none';
    formIniciar.classList = '';
});

btnRegistrar.addEventListener('click', () => {
    formRegistrar.classList = '';
    formIniciar.classList = 'd-none';
});