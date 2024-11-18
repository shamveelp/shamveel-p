const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



// Email Validation 


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    document.getElementById("loading").style.display = "block"; // Show loading indicator

    // Create a FormData object to capture the form data
    var formData = new FormData(this);
  
    // Send the form data using Fetch API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        document.getElementById("loading").style.display = "none"; // Hide loading indicator
        
        if (response.ok) {
            // Display success message
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
            this.reset(); // Clear form fields
        } else {
            // Display error message for response issues
            document.getElementById("errorMessage").style.display = "block";
        }
    })
    .catch(error => {
        document.getElementById("loading").style.display = "none"; // Hide loading indicator
        
        // Display error message for network issues
        document.getElementById("errorMessage").style.display = "block";
        console.error("Error:", error); // Log detailed error to the console
    });
});