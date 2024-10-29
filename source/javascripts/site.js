document.addEventListener("DOMContentLoaded", function() {
	const tabs = document.querySelectorAll('.nav-link');
	const tabContent = document.getElementById('pills-tabContent');

	// Set initial background color
	tabContent.classList.add('marc-color-5'); // Using #161F99

	tabs.forEach(tab => {
		tab.addEventListener('click', function() {
			// Remove existing background classes
			tabContent.classList.remove('marc-color-1', 'marc-color-2', 'marc-color-3', 'marc-color-4', 'marc-color-5', 'marc-color-6', 'marc-color-7', 'marc-color-8', 'marc-color-9');

			// Add new background class based on the active tab
			if (this.id === 'pills-home-tab') {
				tabContent.classList.add('marc-color-5');
			} else if (this.id === 'pills-about-tab') {
				tabContent.classList.add('marc-color-2');
			} else if (this.id === 'pills-projects-tab') {
				tabContent.classList.add('marc-color-3');
			} else if (this.id === 'pills-services-tab') {
				tabContent.classList.add('marc-color-4');
			}
		});
	});
});


function showAbout() {
	document.getElementById('pills-about-tab').click();
}




document.addEventListener('DOMContentLoaded', () => {
	const largeProjectContainer = document.getElementById("large-project-container");
	const largeProjectContainerOverlay = document.getElementById("large-project-container-overlay");

	largeProjectContainer.addEventListener('click', () => {
		largeProjectContainerOverlay.classList.toggle("hidden");
	});
});
