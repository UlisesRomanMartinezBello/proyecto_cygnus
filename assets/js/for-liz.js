const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    
}

const formulario = document.querySelector("form")
const inputs = document.querySelectorAll("input")


const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");



const statusInf = {
    nombre : false,
    apellido : false,
    email : false,
    password : false,
    
}


inputs.forEach((input)=>{
    
    input.addEventListener("keyup",(e)=>{
        

        switch(e.target.name){
            case "nombre":
           
            if(expresiones.nombre.test(e.target.value)){
                statusInf.nombre = true
                
                nombreError.textContent = ""
            }
            else{
                statusInf.nombre = false
               
                nombreError.textContent = "Error:Has ingresado un carácter incorrecto"
            }

            break
            case "apellido":
            
            if(expresiones.nombre.test(e.target.value)){
                statusInf.apellido = true
                
                apellidoError.textContent = ""

            }
            else{
                
                statusInf.apellido = false
                apellidoError.textContent = "Error:Has ingresado un carácter incorrecto"
            }
            break
            case "email":
           
            if(expresiones.email.test(e.target.value)){
                statusInf.email = true
                
                emailError.textContent = ""
            }
            else{
               
                statusInf.email = false
                emailError.textContent = "Error:Has ingresado un carácter incorrecto"
            }
            break
            case "pasword":
            
            if(expresiones.password.test(e.target.value)){
                statusInf.password = true
                
                passwordError.textContent = ""
            }
            else{
                
                statusInf.password = true
                passwordError.textContent = "Error:Has ingresado un carácter incorrecto"
            }
            break
            

        }

    })
    
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const check = document.querySelector("#terminos").checked
    
    if (Object.values(statusInf).includes(false) && check == true){
       
        document.querySelector(".alert-danger").style.display = "none"
        const datos = Object.fromEntries(
            new FormData(e.target)
        )
        console.log(datos)
        formulario.reset()


    }
    else{
        
        document.querySelector(".alert-danger").style.display = "block"

    }
    
})

