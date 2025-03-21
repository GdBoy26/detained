document.addEventListener("DOMContentLoaded", function () {
    // Hide Preloader and Show Navbar
    setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 1000);
    }, 3000);

    // Resize navbar logo
    let navbarLogo = document.getElementById("logo");
    if (navbarLogo) {
        navbarLogo.style.height = "60px";
        navbarLogo.style.width = "auto";
    }
});

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Simulated track data (replace with actual tracks later)
    const tracks = [
        { title: "Track 1", artist: "Artist Name", cover: "placeholder.jpg" },
        { title: "Track 2", artist: "Artist Name", cover: "placeholder.jpg" },
        { title: "Track 3", artist: "Artist Name", cover: "placeholder.jpg" },
        { title: "Track 4", artist: "Artist Name", cover: "placeholder.jpg" }
    ];

    const trackList = document.getElementById("track-list");

    // Function to render tracks dynamically
    function renderTracks() {
        tracks.forEach(track => {
            let trackElement = document.createElement("div");
            trackElement.classList.add("track-item");
            
            trackElement.innerHTML = `
                <div class="track-cover">
                    <img src="${track.cover}" alt="${track.title}">
                </div>
                <div class="track-info">
                    <h3>${track.title}</h3>
                    <p>${track.artist}</p>
                </div>
                <button class="play-btn">▶</button>
            `;
            trackList.appendChild(trackElement);
        });
    }

    renderTracks();
});

// Get elements
const openFormButton = document.getElementById("openForm");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");
const contactForm = document.getElementById("contactForm");

// Open popup
openFormButton.addEventListener("click", () => {
    popupForm.style.display = "flex";
});

// Close popup
closeBtn.addEventListener("click", () => {
    popupForm.style.display = "none";
});

// Close if clicking outside the form
window.addEventListener("click", (e) => {
    if (e.target === popupForm) {
        popupForm.style.display = "none";
    }
});

// Handle form submission (Sends mail)
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Open default email client
    window.location.href = `mailto:music.detained@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;

    popupForm.style.display = "none"; // Close after sending
});