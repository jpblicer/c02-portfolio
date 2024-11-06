document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.main-nav-link');
    const tabContent = document.getElementById('pills-tabContent');
    const videoBackground = document.createElement('video');
    
    // Fix the video to the viewport
    videoBackground.style.position = 'fixed';
    videoBackground.style.top = 0;
    videoBackground.style.left = 0;
    videoBackground.style.width = '100vw';  
    videoBackground.style.height = '100vh'; 
    videoBackground.style.objectFit = 'cover'; 
    videoBackground.style.zIndex = '-1'; 
    videoBackground.muted = true;
    videoBackground.loop = true;
    tabContent.appendChild(videoBackground);

    // Set the initial video
    videoBackground.src = '../images/a.mp4';
    videoBackground.play();

    // Change video source based on tab clicked
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            videoBackground.src = '';

            if (this.id === 'pills-home-tab') {
                videoBackground.src = '../images/a.mp4';
            } else if (this.id === 'pills-about-tab') {
                videoBackground.src = '../images/b.mp4';
            } else if (this.id === 'pills-projects-tab') {
                videoBackground.src = '../images/c.mp4';
            } else if (this.id === 'pills-services-tab') {
                videoBackground.src = '../images/d.mp4';
            }

            videoBackground.load();
            videoBackground.play();
        });
    });
});






function showAbout() {
	document.getElementById('pills-about-tab').click();
}



document.addEventListener("DOMContentLoaded", function() {
    const largeProjectContainer = document.getElementById("large-project-container");

    const overlays = [
        document.getElementById("large-project-container-overlay-a"),
        document.getElementById("large-project-container-overlay-b"),
        document.getElementById("large-project-container-overlay-c"),
        document.getElementById("large-project-container-overlay-d")
    ];

    const smallProjectContainers = [
        document.getElementById("small-project-container-a"),
        document.getElementById("small-project-container-b"),
        document.getElementById("small-project-container-c"),
        document.getElementById("small-project-container-d")
    ];

    const smallProjectsContainerOverlay = document.getElementById("small-projects-container-overlay");

    smallProjectContainers.forEach((container, index) => {
        container.addEventListener("click", () => {
            overlays.forEach(overlay => overlay.classList.add("hidden"));
            overlays[index].classList.toggle("hidden");
        });
    });

    largeProjectContainer.addEventListener('click', () => {
        smallProjectsContainerOverlay.classList.toggle("hidden");
    });
});

