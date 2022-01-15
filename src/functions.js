document.addEventListener('DOMContentLoaded', function (event) {
	const showNavbar = (toggleId, closeId, navId, bodyId, headerId) => {
		const toggle = document.getElementById(toggleId),
			close = document.getElementById(closeId),
			nav = document.getElementById(navId),
			bodypd = document.getElementById(bodyId),
			headerpd = document.getElementById(headerId);

		// Validate that all variables exist
		if (toggle && close && nav && bodypd && headerpd) {
			toggle.addEventListener('click', () => {
				// show navbar
				nav.classList.toggle('showing');
				// change icon
				toggle.setAttribute('class', 'header-toggle-hide');
				close.setAttribute('class', 'header-close-show');
				// add padding to body
				bodypd.classList.toggle('body-pd');
				// add padding to header
				headerpd.classList.toggle('body-pd');
			});

			close.addEventListener('click', () => {
				// show navbar
				nav.classList.toggle('showing');
				// change icon
				toggle.setAttribute('class', 'header-toggle-show');
				close.setAttribute('class', 'header-close-hide');
				// add padding to body
				bodypd.classList.toggle('body-pd');
				// add padding to header
				headerpd.classList.toggle('body-pd');
			});
		}
	};

	showNavbar('header-toggle', 'header-close', 'nav-bar', 'body-pd', 'header');
});
