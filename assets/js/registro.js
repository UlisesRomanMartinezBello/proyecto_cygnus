const formRegistrar = document.getElementById('form-registrar');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const inputPasswordConfirm = document.getElementById('input-password-confirm');
const btnRegistrar = document.getElementById('btn-registrar');
const btnIniciar = document.querySelector('#btn-iniciar');
const formIniciar = document.querySelector('#form-iniciar');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

loadDocument();

function loadDocument() {
    document.addEventListener('DOMContentLoaded', cambiarFormulario);
    inputNombre.addEventListener('blur', validarFormulario);
    inputApellido.addEventListener('blur', validarFormulario);
    inputEmail.addEventListener('blur', validarFormulario);
    inputPassword.addEventListener('blur', validarFormulario);
    inputPasswordConfirm.addEventListener('blur', validarFormulario);
}

function validarFormulario(event) {
    // Validando que los inputs no esten vacios
    if (event.target.value.length > 0) {
        event.target.classList.remove('border-danger');
        event.target.classList.add('border-success', 'border-3');
    } else {
        event.target.classList.add('border-danger', 'border-3');
        event.target.classList.remove('border-success');
        mostrarError('El campo esta vacio', event.target.parentNode);
    }

    // Validar el correo
    if (event.target.type === 'email'){
        if (!expresiones.email.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esto no es un email', event.target.parentNode);
        }
    }

    // Validar el nombre
    if (event.target.type === 'text'){
        if (!expresiones.nombre.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esto no es un nombre', event.target.parentNode);
        }
    }

    // Validar password

}

function mostrarError(mensaje, elementHTML) {
    const mensajeError = document.createElement('div');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert', 'alert-danger', 'text-center', 'mt-3');
    elementHTML.appendChild(mensajeError);
    setTimeout(() => {
        elementHTML.removeChild(mensajeError);
    }, 3000);
}

function cambiarFormulario() {
    btnIniciar.addEventListener('click', () => {
        formRegistrar.classList = 'd-none';
        formIniciar.classList = '';
    });
    
    btnRegistrar.addEventListener('click', () => {
        formRegistrar.classList = '';
        formIniciar.classList = 'd-none';
    });
}