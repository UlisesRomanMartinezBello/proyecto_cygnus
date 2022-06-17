const inputNombre = document.getElementById("input_nombre");
const inputEmail = document.getElementById("input_email");
const txtArea = document.getElementById("txt_area");
const formContacto = document.querySelector("form");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
}


loadDocument();

const $formulario = document.getElementById('form_contacto');
// console.log($formulario)

$formulario.addEventListener('submit',(e)=> {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);

    $formulario.reset ();

    // console.log(datos.codigoPostal);
    fetch('https://proyectocygnus.herokuapp.com/api/contacto',{
        //tipo de dato que va a tener nuestra peticion
        // los datos que vamos a enviar
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            nombre_completo:datos.nombre,
            correo:datos.email,
            mensaje:datos.mensaje,
        })
    })
    .then(responde => responde.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

function loadDocument() {
    inputNombre.addEventListener('blur', validarFormulario);
    inputEmail.addEventListener('blur', validarFormulario);
    txtArea.addEventListener('blur', validarFormulario);
    // formContacto.addEventListener('submit', capturarInformacion);
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
function capturarInformacion(event){
    event.preventDefault();
	const nombre = inputNombre.value;
    const email = inputEmail.value;
    const mensaje = txtArea.value;
    if(nombre.length > 0 && email.length > 0 && mensaje.length > 0){
        event.target.classList.remove('border-danger');
        event.target.classList.add('border-success', 'border-3');
        // console.log(nombre);
        // console.log(email);
        // console.log(mensaje);
        formContacto.reset();
    }else{
        event.target.classList.add('border-danger', 'border-3');
        event.target.classList.remove('border-success');
        mostrarError('Hay campos vacios', event.target.parentNode);
    }
}


