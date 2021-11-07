function toggleMenu() {
	var menuButton = document.getElementById("menu-button");
	var menuList = document.getElementById("navigation");

	menuButton.classList.toggle("closed");
	menuList.classList.toggle("header--navigation--open");
}
