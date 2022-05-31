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
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },{
			  // screens greater than >= 775px
			  breakpoint: 475,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 775px
				breakpoint: 900,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 3,
				  slidesToScroll: 3
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
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
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },{
			  // screens greater than >= 775px
			  breakpoint: 475,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 775px
				breakpoint: 900,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 3,
				  slidesToScroll: 3
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});