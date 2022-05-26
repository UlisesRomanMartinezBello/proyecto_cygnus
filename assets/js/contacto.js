
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]/, // Letras y espacios, pueden llevar acentos.
}

const formulario = document.querySelector("form")

const inputs = document.querySelectorAll("input");
const mensaje = document.getElementById("mensaje")

const nombreError = document.querySelector("#errorNombre");
const emailError = document.querySelector("#errorEmail");
const mensajeError = document.querySelector("#errorMensaje");

const statusInf = {
	nombre: false,
	email: false,
	mensaje: false
}

/* mensaje.addEventListener("keyup", (e)=>{
    e.target.name("mensaje")
    if(expresiones.mensaje.test(e.target.value)){
        statusInf.mensaje = true
    mensajeError.textContent = ""
    }else{
        statusInf.mensaje = false
        mensajeError.textContent = "error"
    }
}) */

inputs.forEach((inp)=>{
	inp.addEventListener("keyup",(e)=>{

		switch(e.target.name){
			case "nombre":
				if(expresiones.nombre.test(e.target.value)){
					statusInf.nombre = true
					nombreError.textContent = ""
				}else{
					statusInf.nombre = false
					nombreError.textContent = "error"
				}
				break
			case "email":
				if(expresiones.email.test(e.target.value)){
					statusInf.email = true
					emailError.textContent = ""
				}else{
					statusInf.email = false
					emailError.textContent = "error"
				}
				break			
		}

	})

})

