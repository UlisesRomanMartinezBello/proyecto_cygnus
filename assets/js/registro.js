const formRegistrar = document.getElementById('form-registrar');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const inputPasswordConfirm = document.getElementById('input-password-confirm');
const btnRegistrar = document.getElementById('btn-registrar');
const btnIniciar = document.querySelector('#btn-iniciar');
const formIniciar = document.querySelector('#form-iniciar');
const botonFinalizar = document.getElementById('btn-finalizar');


botonFinalizar.addEventListener("click",function(event){
    // event.preventDefault();
    // console.log(inputNombre.value)
});

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

loadDocument();

const $formulario = document.getElementById('form-registrar');
const $formLogin = document.getElementById('form-iniciar');


fetch('http://localhost:8080/api/usuario/all')
.then(response => response.json())
.then(datos =>{
    // console.log(datos);
    console.log(datos);
})

$formLogin.addEventListener('submit', (e) => {
    
    e.preventDefault();
    console.log($formLogin);
    const email = document.querySelector('#input-email-login').value;
    const password = document.querySelector('#input-password-login').value;
    console.log(email, password);

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify( {
            correo: email,
            password: password
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(resp => {
        const token = resp.headers.get('Authorization');
        
        if(token && token.includes('Bearer') && resp.ok && email!="admin@proyectocygnus.com" && password != "admincygnus") {
            localStorage.setItem('token', token);
            console.log(token);
            url = window.location;
            const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
            location.href = path +  '../index.html';
        } if(token && token.includes('Bearer') && resp.ok && email=="admin@proyectocygnus.com" && password == "admincygnus") {
            localStorage.setItem('token', token);
            console.log(token);
            url = window.location;
            const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
            location.href = path +  'agregarProducto.html';
        } else {
            localStorage.removeItem('token');          
        }
    })
})

$formulario.addEventListener('submit',(e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )

    console.log(datos);

    $formulario.reset ();

    console.log(datos.codigoPostal);
    fetch('http://localhost:8080/api/usuario',{
        //tipo de dato que va a tener nuestra peticion
        // los datos que vamos a enviar
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
                nombre:datos.nombre,
                apellido:datos.apellido,
                correo:datos.email,
                password:datos.password,
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
    document.addEventListener('DOMContentLoaded', cambiarFormulario);
    inputNombre.addEventListener('blur', validarFormulario);
    inputApellido.addEventListener('blur', validarFormulario);
    inputEmail.addEventListener('blur', validarFormulario);
    inputPassword.addEventListener('blur', validarFormulario);
    inputPasswordConfirm.addEventListener('blur', validarFormulario);
    // botonFinalizar.addEventListener('clic',enviarFormulario);
}

function validarFormulario(event) {
    // Validando que los inputs no esten vacios
    let bandera = true;
    if (event.target.value.length > 0) {
        event.target.classList.remove('border-danger');
        event.target.classList.add('border-success', 'border-3');
    } else {
        event.target.classList.add('border-danger', 'border-3');
        event.target.classList.remove('border-success');
        mostrarError('El campo esta vacio', event.target.parentNode);
        bandera = false;
    }

    // Validar el correo

    if (event.target.type === 'email' && bandera === true){
        if (!expresiones.email.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esto no es un email', event.target.parentNode);
        }
    }

    // Validar el nombre
    if (event.target.type === 'text' && bandera === true){
        if (!expresiones.nombre.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esto no es un nombre', event.target.parentNode);
        }
    }

    // Validar password
    
    if (event.target.type === 'password' && bandera === true ){
        if (!expresiones.password.test(event.target.value)){
            event.target.classList.add('border-danger', 'border-3');
            event.target.classList.remove('border-success');
            mostrarError('Esta no es una contraseña segura', event.target.parentNode);     
        }
        else{
        if(inputPasswordConfirm.value == ""){
            mostrarMensaje('Confirmar contraseña', event.target.parentNode);
        } else{
            if (bandera === true && inputPassword.value === inputPasswordConfirm.value) { 
                    event.target.classList.add('border-success', 'border-3');
                    event.target.classList.remove('border-danger');
                    mostrarMensaje('Contraseñas validas', event.target.parentNode);    
                }else{
                    event.target.classList.add('border-danger', 'border-3');
                    event.target.classList.remove('border-success');
                    mostrarError('Las contraseñas no son identicas', event.target.parentNode);
                }
            }  
        }

        // console.log(inputPasswordConfirm.value);
        // console.log(inputPassword.value);
        // imprimirInformacion();
    }
    //Verificar contraseñas iguales 
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

function mostrarMensaje(mensaje, elementHTML) {
    const mensajeError = document.createElement('div');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert', 'alert-success', 'text-center', 'mt-3');
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


	
