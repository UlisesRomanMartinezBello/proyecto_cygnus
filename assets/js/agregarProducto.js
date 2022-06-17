//agregar código

//agregar código
const $formulario = document.getElementById('form_contacto');
console.log($formulario);

$formulario.addEventListener('submit',(e)=> {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )

    console.log(datos.precio);
    console.log(datos.costo);


    $formulario.reset ();

    fetch('https://proyectocygnus.herokuapp.com/api/productos',{
        //tipo de dato que va a tener nuestra peticion
        // los datos que vamos a enviar
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
                nombre_producto:datos.nombre,
                talla:datos.talla,
                descripcion:datos.descripcion,
                categoria:datos.categoria,
                color:datos.color,
                precio:datos.precio,
                costo:datos.costo,
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