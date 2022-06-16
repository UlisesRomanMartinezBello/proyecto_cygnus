//agregar código

//agregar código
const $formulario = document.getElementById('form');
console.log($formulario);

$formulario.addEventListener('submit',(e)=> {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )

    console.log(datos);
    // let ruta="";
    // let id="";
    // let contadorPunto=0;
    // let ID;
    // banderaRuta=true;
    // banderaId=true;
    // for(let x=0;x<datos.mensaje.length;x++){
    //     // console.log(datos.mensaje.charAt(x));
    //     if(datos.mensaje.charAt(x)==":"){
    //         contadorPunto++;
    //     }
    //     if(contadorPunto==1 && banderaRuta){
    //         for(let y=x+1;y<datos.mensaje.length;y++){
    //             if(datos.mensaje.charAt(y)==","){
    //                 break;
    //             }else{
    //                 let aux=datos.mensaje.charAt(y)
    //                 ruta=ruta+aux;
    //                 x++;
    //             }
    //         }
    //         banderaRuta=false;
    //     }
    //     if(contadorPunto==3 && banderaId){
    //         for(let y=x+1;y<datos.mensaje.length;y++){
    //             if(datos.mensaje.charAt(y)=="}"){
    //                 break;
    //             }else{
    //                 let aux=datos.mensaje.charAt(y)
    //                 id=id+aux;
    //                 x++;
    //             }
    //         }
    //         banderaId=false;
    //     }
    //     ID= parseInt(id);
   
    // }
    // console.log(ruta);
    // console.log(id);
    // console.log(ID);
    // console.log(contadorPunto);
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

                // ruta: ruta,
                // productos:{
                //     id: ID
                // }
                
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