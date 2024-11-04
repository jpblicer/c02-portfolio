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



document.addEventListener("DOMContentLoaded", function() {
	const largeProjectContainer = document.getElementById("large-project-container");


	const largeProjectContainerOverlayA = document.getElementById("large-project-container-overlay-a");
	const largeProjectContainerOverlayB = document.getElementById("large-project-container-overlay-b");
	const largeProjectContainerOverlayC = document.getElementById("large-project-container-overlay-c");
	const largeProjectContainerOverlayD = document.getElementById("large-project-container-overlay-d");

	const smallProjectContainerA = document.getElementById("small-project-container-a")
	const smallProjectContainerB = document.getElementById("small-project-container-b")
	const smallProjectContainerC = document.getElementById("small-project-container-c")
	const smallProjectContainerD = document.getElementById("small-project-container-d")


	const smallProjectsContainerOverlay = document.getElementById("small-projects-container-overlay")



	smallProjectContainerA.addEventListener("click", () => {
	 largeProjectContainerOverlayA.classList.toggle("hidden");
	})
	smallProjectContainerB.addEventListener("click", () => {
	 largeProjectContainerOverlayB.classList.toggle("hidden");
	})
	smallProjectContainerC.addEventListener("click", () => {
	 largeProjectContainerOverlayC.classList.toggle("hidden");
	})
	smallProjectContainerD.addEventListener("click", () => {
	 largeProjectContainerOverlayD.classList.toggle("hidden");
	})






	largeProjectContainer.addEventListener('click', () => {
		smallProjectsContainerOverlay.classList.toggle("hidden");
	});
});
