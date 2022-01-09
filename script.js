var navMenu = document.getElementById("navMenu");
var hamburgerButton = document.getElementById("hamburgerButton");

function openCloseMenu() {

	if(navMenu.style.display === "flex"){
		navMenu.style.display = "";
	}
	else {
		navMenu.style.display = "flex";
	}
}


hamburgerButton.addEventListener('click', openCloseMenu);