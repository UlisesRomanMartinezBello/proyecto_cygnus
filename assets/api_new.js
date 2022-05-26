const productos = [
    {
        nombre: "Hoodie Grogu",
        tipo: "Hoodie",
        precio: 220,
        talla: ["G"],
        color: "Azul",
        imagenes: ['3.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Chamarra Galaxia",
        tipo: "chamarra",
        precio: 180,
        talla: ["G","M","S","XS"],
        color: "azul",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Hoddie Galaxia",
        tipo: "hoddie",
        precio: 230,
        talla: ["M","S","XS"],
        color: "morado",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Playera Space",
        tipo: "playera",
        precio: 150,
        talla: ["G","M","S"],
        color: "blanco",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Chamarra Space",
        tipo: "chamarra",
        precio: 350,
        talla: ["G","M","XS"],
        color: "negro",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Hoodie Space",
        precio: 250,
        talla: ["G","M","S","XS"],
        color: "azul",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Playera Alien",
        tipo: "playera",
        precio: 250,
        talla: ["G","M","S","XS"],
        color: "blanco",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Chamarra Alien",
        tipo: "chamarra",
        precio: 250,
        talla: ["G","M","XS"],
        color: "morado",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Hoodie Alien",
        tipo: "hoddie",
        precio: 250,
        talla: ["S","XS"],
        color: "negro",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Playera Stars",
        tipo: "playera",
        precio: 250,
        talla: ["M","S","XS"],
        color: "blanco",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Chamarra Stars",
        tipo: "chamarra",
        precio: 250,
        talla: ["G","M","XS"],
        color: "",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    },
    {
        nombre: "Hoddie Stars",
        tipo: "hoddie",
        precio: 250,
        talla: ["G","S","XS"],
        color: "",
        imagenes: ['playera-frontal.png','playera-trasera.png','playera-lateral-derecho.png','playera-lateral-izquierdo.png'],
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aliquid, dolores labore eligendi beatae quisquam saepe eius. Nam minima cumque recusandae eaque iure ipsam quisquam doloremque alias magnam eligendi.',
    }
];