var slideIndex = 0; 
showSlides(); // call showslide method 

function showSlides() 
{ 
	var i; 

	// get the array of divs' with classname image-sliderfade 
	var slides = document.getElementsByClassName("image-sliderfade"); 
	
	// get the array of divs' with classname dot 
	var dots = document.getElementsByClassName("dot"); 

	for (i = 0; i < slides.length; i++) { 
		// initially set the display to 
		// none for every image. 
		slides[i].style.display = "none"; 
	} 

	// increase by 1, Global variable 
	slideIndex++; 

	// check for boundary 
	if (slideIndex > slides.length) 
	{ 
		slideIndex = 1; 
	} 

	for (i = 0; i < dots.length; i++) { 
		dots[i].className = dots[i].className. 
							replace(" active", ""); 
	} 

	slides[slideIndex - 1].style.display = "block"; 
	dots[slideIndex - 1].className += " active"; 

	// Change image every 2 seconds 
	setTimeout(showSlides, 3000); 
} 
