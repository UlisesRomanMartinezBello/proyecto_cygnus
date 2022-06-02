window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		// slidesToShow: 4,
		// slidesToScroll: 4,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 200,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  },{
			  // screens greater than >= 775px
			  breakpoint: 675,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 775px
				breakpoint: 1200,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1624,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista1'), {
		// slidesToShow: 4,
		// slidesToScroll: 4,
		draggable: true,
		dots: '.carousel__indicadores1',
		arrows: {
			prev: '.carousel__anterior1',
			next: '.carousel__siguiente1'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 200,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  },{
			  // screens greater than >= 775px
			  breakpoint: 675,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 775px
				breakpoint: 1200,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1624,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista2'), {
		// slidesToShow: 4,
		// slidesToScroll: 4,
		draggable: true,
		dots: '.carousel__indicadores1',
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 200,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  },{
			  // screens greater than >= 775px
			  breakpoint: 675,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 775px
				breakpoint: 1200,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1624,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});