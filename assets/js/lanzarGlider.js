let glide = new Glide(".glide", {
  type: "slider", //hay dos tipos slider y carrousel
  startAt: 2, //adónde inicia el slider
  focusAt: "center",
  autoplay: 4000, //inicia automatic en miliseg
  perView: 4, //cantidad de slide en pantalla
  breakpoints: {
    //para el tamaño de pantalla
    800: { perView: 4 },
    480: { perView: 3 },
  },
});

glide.mount();

let glide1 = new Glide(".glide1", {
  type: "slider", //hay dos tipos slider y carrousel
  startAt: 2, //adónde inicia el slider
  focusAt: "center",
  autoplay: 4000, //inicia automatic en miliseg
  perView: 4, //cantidad de slide en pantalla
  breakpoints: {
    //para el tamaño de pantalla
    800: { perView: 4 },
    480: { perView: 3 },
  },
});

glide1.mount();

let glide2 = new Glide(".glide2", {
  type: "slider", //hay dos tipos slider y carrousel
  startAt: 2, //adónde inicia el slider
  focusAt: "center",
  autoplay: 4000, //inicia automatic en miliseg
  perView: 4, //cantidad de slide en pantalla
  breakpoints: {
    //para el tamaño de pantalla
    800: { perView: 4 },
    480: { perView: 3 },
  },
});
glide2.mount();