const inputNombre = document.getElementById("input_nombre");
const inputEmail = document.getElementById("input_email");
const txtArea = document.getElementById("txt_area");
const btnRegistrar = document.getElementById("btn_enviar")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
}

loadDocument();

function loadDocument() {
    inputNombre.addEventListener('blur', validarFormulario);
    inputEmail.addEventListener('blur', validarFormulario);
    txtArea.addEventListener('blur', validarFormulario);
    btnRegistrar.addEventListener('click', capturarInformacion);
}

function validarFormulario(event) {
	
    // Validando que los campos no esten vacios
    const bandera = true;
    if (event.target.value.length > 0 ) {
        event.target.classList.remove('border-danger');
        event.target.classList.add('border-success', 'border-3');
    } else {
        event.target.classList.add('border-danger', 'border-3');
        event.target.classList.remove('border-success');
        mostrarError('El campo esta vacio', event.target.parentNode);
        bandera = false;
    }

    // Validar el nombre
    if (event.target.type === 'text' && bandera === true){
        if (!expresiones.nombre.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esto no es un nombre', event.target.parentNode);
        }
    }
	// Validar el correo
    if (event.target.type === 'email' && bandera === true){
        if (!expresiones.email.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esto no es un email', event.target.parentNode);
        }
    }
}

function mostrarError(mensaje, elementHTML) {
    const mensajeError = document.createElement('div');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert', 'alert-danger', 'text-center', 'mt-3');
    elementHTML.appendChild(mensajeError);
    setTimeout(() => {
        elementHTML.removeChild(mensajeError);
    }, 2000);
}
function capturarInformacion(){
	const nombre = inputNombre.value;
	console.log("el nombre es "+ nombre);
	const email = inputEmail.value;
	console.log("el email es "+ email);
	const mensaje = txtArea.value;
	alert("el mensaje es "+ mensaje);
}


