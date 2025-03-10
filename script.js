// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to switch between portfolio tabs (Projects, Certifications, Tech Stack)
function showTab(tabName) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-button");

    // Hide all tab contents and remove 'active' class from buttons
    tabs.forEach(tab => tab.style.display = "none");
    buttons.forEach(button => button.classList.remove("active"));

    // Show the selected tab and highlight its button
    document.getElementById(tabName).style.display = "block";
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add("active");
}

// Ensure only the 'Projects' section is visible by default
document.addEventListener("DOMContentLoaded", function () {
    showTab('projects');
});


// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s ease-in-out";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// Certifications Image Zoom Effect
document.querySelectorAll('.cert-card img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoomed');
    });
});

// Dynamic Year in Footer
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("footer p").innerHTML = `© ${new Date().getFullYear()} Juliana Hubacova | All Rights Reserved`;
});
