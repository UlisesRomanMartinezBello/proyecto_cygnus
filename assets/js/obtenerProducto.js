fetch('http://localhost:8080/api/productos/all')
.then(response => response.json())
.then(datos =>{
    console.log(datos);

    // datos.forEach(el => {
    //     if(el === null){
    //         el = "";
    //     }else{
    //         const elementos = document.getElementById('tabla');
    //         const element = document.createElement('tr');
    //         element.innerHTML =`
    //             <td>${el.id}</td>
    //             <td>${el.nombre}</td>
    //             <td>${el.apellido}</td>
    //             <td>${el.correo_electronico}</td>
    //             <td>${el.direccion}</td>
    //             <td>${el.codigo_postal}</td>
    //             <td>${el.password}</td>
    //             <td><button id="${el.id}" class="btn btn-danger"
    //                 name="eliminar">Eliminar</button>
    //                 </td>
                
    //         `;
    //         elementos.appendChild(element);
    //     }
    // });

    // document.getElementById('tabla').addEventListener('click', function (e) {
    // borrar(e.target);
    //     // console.log(e.target);
    // });
    
});

// function borrar(elemento) {
//     const fila = elemento.parentElement.parentElement;
//     console.log(fila);
//     if (elemento.name === 'eliminar') {

//         document.getElementById("tabla").deleteRow(fila.rowIndex);
//         fetch('http://localhost:8080/api/imagen/delete/' + elemento.id, {
//             method: 'DELETE'
//         })
//             .then(res => res)
//             .then(res => console.log(res))
//         console.log(elemento.id)
//     }
// }