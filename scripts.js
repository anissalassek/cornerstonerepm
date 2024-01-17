// A $( document ).ready() block.
$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });

    AOS.init();

    $('.slider-container').slick({
		autoplay: false,        // Do we want it to autoplay? true or false
		  autoplaySpeed: 2000,   // How long between each slide when autoplaying
		  speed: 500,            // How fast is the transition 
		arrows: true,          // Do you want to show arrows to trigger each slide
		accessibility: true,   // Enables tabbing and arrow key navigation 
		dots: false,            // Enables the dots below to show how many slides
		fade: false,           // Changes the animate from slide to fade if true
		infinite: true,       // When true, means that it will scroll in a circle
		pauseOnHover: true,   // When true means the autoplay pauses when hovering
		pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });
});


