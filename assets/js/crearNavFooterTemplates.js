const divNavSuperior = document.getElementById("divNavSuperior");
const divNavInferior = document.getElementById("divNavInferior");
// console.log(divNavSuperior);
crearNav();
function crearNav(){
    
    // Variables NavSuperior
    let divContainer = crearElemento('div');
    let divLogo = document.createElement('div');
    let hiperImgLogo = document.createElement('a');
    let imgLogoNav = document.createElement('img');
    let divUser = document.createElement('div');
    let divIconoUser = document.createElement('div');
    let divIniciarSesion = document.createElement('div');
    let hiperIconoSesion = document.createElement('a');
    let iconoSesion = document.createElement('i');
    let hiperTextoRegistrate = document.createElement('a');
    let etiquetaTextoRegistrate = document.createElement('p');
    let textoRegistrate = document.createTextNode("Regístrate");

    // Variables NavInferior
    
    
    
    // Creando NavSuperior

    /*
    <div class="bg-principal" id="divNavSuperior">
        <div class="container divContainer" id="navLogoUser">
            <div class="divLogo">
                <a href="index.html" class="text-light ">
                    <img class="imgNav" src="assets/img/logo-white.png">
                </a>
            </div>
            <div class="divUser d-flex justify-content-end">
                <div class="divIconoUser hiper">
                    <a href="templates/formulario.html" class="text-light btnIcono">
                        <i class="uil uil-user"></i>
                    </a>
                </div>
                <div class="divIniciarSesion hiper">
                    <a href="templates/formulario.html" class="text-light">
                        <p class="textoRegistrate">Registrate</p>
                    </a>
                </div>
            </div>
         </div>
    </div>
    */

    heredar(divNavSuperior,divContainer);
    heredar(divContainer,divLogo);
    heredar(divLogo,hiperImgLogo);
    heredar(hiperImgLogo,imgLogoNav);
    heredar(divContainer,divUser);
    heredar(divUser,divIconoUser);
    heredar(divUser,divIniciarSesion);
    heredar(divIconoUser,hiperIconoSesion);
    heredar(hiperIconoSesion,iconoSesion);
    heredar(divIniciarSesion,hiperTextoRegistrate);
    heredar(hiperTextoRegistrate,etiquetaTextoRegistrate);
    heredar(etiquetaTextoRegistrate,textoRegistrate);

    crearClase(divContainer,'container');
    crearClase(divContainer,'divContainer');
    crearId(divContainer,'navLogoUser');
    
    crearClase(divLogo,'divLogo');
    
    agregarAtributo(hiperImgLogo,'href','../index.html');
    crearClase(hiperImgLogo,'text-light')
    crearClase(imgLogoNav,'imgNav');
    agregarAtributo(imgLogoNav,'src','../assets/img/logo-white.png');
    
    crearClase(divUser,'divUser');
    crearClase(divUser,'d-flex');
    crearClase(divUser,'justify-content-end');

    crearClase(divIconoUser,'divIconoUser');
    crearClase(divIconoUser,'hiper');

    crearClase(divIniciarSesion,'divIniciarSesion');
    crearClase(divIniciarSesion,'hiper');

    agregarAtributo(hiperIconoSesion,'href','formulario.html');
    crearClase(hiperIconoSesion,'text-light');
    crearClase(hiperIconoSesion,'btnIcono');

    crearClase(iconoSesion,'uil');
    crearClase(iconoSesion,'uil-user');

    agregarAtributo(hiperIconoSesion,'href','formulario.html')
    crearClase(hiperIconoSesion,'text-light');
    crearClase(hiperIconoSesion,'btnIcono');

    agregarAtributo(hiperTextoRegistrate,'href','formulario.html');
    crearClase(hiperTextoRegistrate,'text-light')
    crearClase(etiquetaTextoRegistrate,'textoRegistrate');

    // Creando NavInferior

    /*
    <div class="bg-principal"  id="divNavInferior">
      <div class="container divContainer" id="nav">
        <nav class="navbar navbar-dark" id="navbarP">
		
          <div class="divNav" id="divProyecto">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="iconoToggler">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand TituloProyecto textoNavBar" href="#">Proyecto Cygnus</a>
          </div>

          <div class="divNav" id="divTexto">
            <a class="nav-item nav-link textoNavBar linkHover" href="templates/producto.html" >Sudaderas</a>
            <a class="nav-item nav-link textoNavBar linkHover" href="templates/producto.html" >Hoodies</a>
            <a class="nav-item nav-link textoNavBar linkHover" href="templates/producto.html" >Playeras</a>
          </div>

          <div class="divNav" id="divBotones">
		  
            <div class="input-group input-group-sm d-flex align-items-center divInputBuscar">
              <div class="input-group-prepend buscar">
                <span class="input-group-text barraBuscar" id="inputGroup-sizing-sm"><i class="uil uil-search"></i></span>
              </div>
              <input type="text" class="form-control barraBuscar" id="barraBuscarCursor" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" placeholder="Buscar...">
            </div>
            
            <div class="d-flex divBtn justify-content-end">
              <i class="uil uil-heart btnIconoCorazon"></i>
              <a href="templates/carrito-compras.html" class="text-light btnIcono">
				<i class="uil uil-shopping-cart-alt" id="btnCarrito"></i>
			  </a>
            </div>
			
          </div>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav hiper">
              <a class="nav-item nav-link textoNavBar" href="templates/producto.html">Chamarras</a>
              <a class="nav-item nav-link textoNavBar" href="templates/producto.html">Hoddie</a>
              <a class="nav-item nav-link textoNavBar" href="templates/producto.html">Playeras</a>
            </div>
          </div>

        </nav>
      </div>
    </div>
    */
    let divNavContainer = document.createElement('div');
    let nav = document.createElement('nav');
    let divProyecto = document.createElement('div');
    let divTexto = document.createElement('div');
    let divBotones = document.createElement('div');
    let navbarNavAltMarkup = document.createElement('div');
    let botonNavColapsada = document.createElement('button');
    let spanNavColapsada = document.createElement('span');
    let hiperProyectoCygnus = document.createElement('a');
    let textoHiperProyectoCygnus = document.createTextNode("Proyecto Cygnus");
    let hiperSudaderas = document.createElement('a');
    let hiperHoodies = document.createElement('a');
    let hiperPlayeras = document.createElement('a');
    let textoHiperSudadera = document.createTextNode("Sudaderas");
    let textoHiperHoodies = document.createTextNode("Hoodies");
    let textoHiperPlayeras = document.createTextNode("Playeras");
    let textHiperSudadera = document.createTextNode("Sudaderas");
    let textHiperHoodies = document.createTextNode("Hoodies");
    let textHiperPlayeras = document.createTextNode("Playeras");
    let divInputBuscar = document.createElement('div');
    let divBtn = document.createElement('div');
    let buscar = document.createElement('div');
    let inputBuscar = document.createElement('input');
    let spanBuscar = document.createElement('span');
    let iconoBuscar = document.createElement('i');
    let iconoCorazon = document.createElement('i');
    let hiperCarrito = document.createElement('a');
    let iconoCarrito = document.createElement('i');
    let navbarNavAltMarkupContenido = document.createElement('div');
    let hiperSudaderasColapsado = document.createElement('a');
    let hiperHoodiesColapsado = document.createElement('a');
    let hiperPlayerasColapsado = document.createElement('a');

    heredar(divNavInferior,divNavContainer);
    heredar(divNavContainer,nav);
    heredar(nav,divProyecto);
    heredar(nav,divTexto);
    heredar(nav,divBotones);
    heredar(nav,navbarNavAltMarkup);
    heredar(divProyecto,botonNavColapsada);
    heredar(botonNavColapsada,spanNavColapsada);
    heredar(divProyecto,hiperProyectoCygnus);
    heredar(hiperProyectoCygnus,textoHiperProyectoCygnus);
    heredar(divTexto,hiperSudaderas);
    heredar(divTexto,hiperHoodies);
    heredar(divTexto,hiperPlayeras);
    heredar(hiperSudaderas,textHiperSudadera);
    heredar(hiperHoodies,textHiperHoodies);
    heredar(hiperPlayeras,textHiperPlayeras);
    heredar(divBotones,divInputBuscar);
    heredar(divBotones,divBtn);
    heredar(divInputBuscar,buscar);
    heredar(divInputBuscar,inputBuscar);
    heredar(buscar,spanBuscar);
    heredar(spanBuscar,iconoBuscar);
    heredar(divBtn,iconoCorazon);
    heredar(divBtn,hiperCarrito);
    heredar(hiperCarrito,iconoCarrito);
    heredar(navbarNavAltMarkup,navbarNavAltMarkupContenido);
    heredar(navbarNavAltMarkupContenido,hiperSudaderasColapsado);
    heredar(navbarNavAltMarkupContenido,hiperHoodiesColapsado);
    heredar(navbarNavAltMarkupContenido,hiperPlayerasColapsado);
    heredar(hiperSudaderasColapsado,textoHiperSudadera);
    heredar(hiperHoodiesColapsado,textoHiperHoodies);
    heredar(hiperPlayerasColapsado,textoHiperPlayeras);

    crearClase(divNavContainer,'container');
    crearClase(divNavContainer,'divContainer');
    agregarAtributo(divNavContainer,'id','nav');

    crearClase(nav,'navbar');
    crearClase(nav,'navbar-dark');
    agregarAtributo(nav,'id','navbarP');

    crearClase(divProyecto,'divNav');
    agregarAtributo(divProyecto,'id','divProyecto');

    crearClase(botonNavColapsada,'navbar-toggler');
    agregarAtributo(botonNavColapsada,'id','iconoToggler',);
    agregarAtributo(botonNavColapsada,'type','button');
    agregarAtributo(botonNavColapsada,'data-toggle','collapse');
    agregarAtributo(botonNavColapsada,'data-target','#navbarNavAltMarkup');
    agregarAtributo(botonNavColapsada,'aria-controls','navbarNavAltMarkup');
    agregarAtributo(botonNavColapsada,'aria-expanded','false');
    agregarAtributo(botonNavColapsada,'aria-label','Toggle navigation');
    crearClase(spanNavColapsada,'navbar-toggler-icon');

    crearClase(hiperProyectoCygnus,'navbar-brand');
    crearClase(hiperProyectoCygnus,'TituloProyecto');
    crearClase(hiperProyectoCygnus,'textoNavBar');
    agregarAtributo(hiperProyectoCygnus,'href','../index.html');

    crearClase(divTexto,'divNav');
    agregarAtributo(divTexto,'id','divTexto');
    agregarAtributo(hiperSudaderas,'class','nav-item nav-link textoNavBar linkHover');
    agregarAtributo(hiperSudaderas,'href','productos.html');
    agregarAtributo(hiperHoodies,'class','nav-item nav-link textoNavBar linkHover');
    agregarAtributo(hiperHoodies,'href','productos.html');
    agregarAtributo(hiperPlayeras,'class','nav-item nav-link textoNavBar linkHover');
    agregarAtributo(hiperPlayeras,'href','productos.html');

    crearClase(divBotones,'divNav');
    agregarAtributo(divBotones,'id','divBotones');

    agregarAtributo(divInputBuscar,'class','input-group input-group-sm d-flex align-items-center divInputBuscar');
    agregarAtributo(buscar,'class','input-group-prepend buscar');
    agregarAtributo(spanBuscar,'class','input-group-text barraBuscar');
    agregarAtributo(spanBuscar,'id','inputGroup-sizing-sm');
    agregarAtributo(iconoBuscar,'class','uil uil-search');
    agregarAtributo(inputBuscar,'type','text');
    agregarAtributo(inputBuscar,'class','form-control barraBuscar');
    agregarAtributo(inputBuscar,'id','barraBuscarCursor');
    agregarAtributo(inputBuscar,'aria-label','Small');
    agregarAtributo(inputBuscar,'aria-describedby','inputGroup-sizing-sm');
    agregarAtributo(inputBuscar,'placeholder','Buscar...');

    agregarAtributo(divBtn,'class','d-flex divBtn justify-content-end');
    agregarAtributo(iconoCorazon,'class','uil uil-heart btnIconoCorazon');
    agregarAtributo(hiperCarrito,'href','carrito-compras.html');
    agregarAtributo(hiperCarrito,'class','text-light btnIcono');
    agregarAtributo(iconoCarrito,'class','uil uil-shopping-cart-alt');
    agregarAtributo(iconoCarrito,'id','btnCarrito');

    agregarAtributo(navbarNavAltMarkup,'class','collapse navbar-collapse');
    agregarAtributo(navbarNavAltMarkup,'id','navbarNavAltMarkup');
    agregarAtributo(navbarNavAltMarkupContenido,'class','navbar-nav hiper');
    agregarAtributo(hiperSudaderasColapsado,'class','nav-item nav-link textoNavBar');
    agregarAtributo(hiperHoodiesColapsado,'class','nav-item nav-link textoNavBar');
    agregarAtributo(hiperPlayerasColapsado,'class','nav-item nav-link textoNavBar');
    agregarAtributo(hiperSudaderasColapsado,'href','producto.html');
    agregarAtributo(hiperHoodiesColapsado,'href','producto.html');
    agregarAtributo(hiperPlayerasColapsado,'href','producto.html');

    // console.log(divContainer);
    
}

function heredar(padre,hijo){
    padre.appendChild(hijo);
}

function crearElemento(etiqueta){
    return document.createElement(etiqueta);
}

function crearClase(elemento,clase){
    elemento.classList.add(clase);
}

function crearId(elemento,id){
    elemento.setAttribute('id',id);
}

function agregarAtributo(elemento,atributo,ruta){
    elemento.setAttribute(atributo,ruta);
}
