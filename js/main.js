//Hide and show segments onclick

var aboutDisplay = document.getElementById("about").style.display;
var portfolioDisplay = document.getElementById("portfolio").style.display;
var contactDisplay = document.getElementById("contact").style.display;



$(document).ready(function(){

	$('#about-button').click(function(){

		if ( aboutDisplay == ""){
			$('#about').fadeOut();
		}

		if ( portfolioDisplay == ""){
			$('#portfolio').fadeOut();
		}

		if (contactDisplay == ""){
			$('#contact').fadeOut();
		}
		
		$('#about').delay(300).fadeIn();
	});

	$('#portfolio-button').click(function(){

		if ( aboutDisplay == ""){
			$('#about').fadeOut();
		}

		if ( portfolioDisplay == ""){
			$('#portfolio').fadeOut();
		}

		if (contactDisplay == ""){
			$('#contact').fadeOut();
		}
		
		$('#portfolio').delay(300).fadeIn();
	});

	$('#contact-button').click(function(){

		if ( aboutDisplay == ""){
			$('#about').fadeOut();
		}

		if ( portfolioDisplay == ""){
			$('#portfolio').fadeOut();
		}

		if (contactDisplay == ""){
			$('#contact').fadeOut();
		}
		
		$('#contact').delay(300).fadeIn();
	});

		$('#name').click(function(){

		if ( aboutDisplay == ""){
			$('#about').fadeOut();
		}

		if ( portfolioDisplay == ""){
			$('#portfolio').fadeOut();
		}

		if (contactDisplay == ""){
			$('#contact').fadeOut();
		}
	});
});