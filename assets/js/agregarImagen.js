//agregar código

//agregar código
const $formulario = document.getElementById('form-imagenes');
console.log($formulario);

$formulario.addEventListener('submit',(e)=> {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);
    $formulario.reset ();

    fetch('http://localhost:8080/api/imagen',{
        //tipo de dato que va a tener nuestra peticion
        // los datos que vamos a enviar
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
                ruta: datos.ruta,
                productos:{
                    id: datos.producto_id
                }           
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