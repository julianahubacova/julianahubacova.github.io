document.addEventListener("DOMContentLoaded", function () {
    showTab('projects'); // Set default tab

    const projects = [
        {
            title: "Sentiment Analysis on Yelp",
            description: "Analyzing Yelp reviews to uncover sentiment and similarity patterns.",
            link: "https://github.com/julianahubacova/sentiment_analysis_yelp",
            tags: ["NLP", "Sentiment Analysis"],
            status: "Private"
        },
        {
            title: "Predicting House Prices",
            description: "Using Feedforward Neural Networks to predict house prices.",
            link: "https://github.com/julianahubacova/Predicting-house-prices",
            tags: ["Deep Learning", "Neural Networks"],
            status: "Public"
        },
        {
            title: "Sales Data Analysis",
            description: "Analyzing sales data to find trends and patterns.",
            link: "https://github.com/julianahubacova/Sales_Data_Analysis",
            tags: ["Data Analysis", "Visualization"],
            status: "Public"
        },
        {
            title: "Earnings Surprises Analysis",
            description: "SAS-based analysis of earnings announcements and forecast accuracy.",
            link: "https://github.com/julianahubacova/earnings_surprises_analysis",
            tags: ["Finance", "SAS"],
            status: "Public"
        },
        {
            title: "Detecting Fake Reviews",
            description: "ML and NLP to classify book reviews as fake or real.",
            link: "https://github.com/julianahubacova/Detecting_Fake_Reviews",
            tags: ["NLP", "Machine Learning"],
            status: "Public"
        },
        {
            title: "Image Classification",
            description: "Training a CNN from scratch and comparing with ResNet-18 transfer learning.",
            link: "https://github.com/julianahubacova/Image-Classification",
            tags: ["Deep Learning", "CNN"],
            status: "Private"
        },
        {
            title: "Exam Scores Prediction",
            description: "Predicting exam scores using a neural network.",
            link: "https://github.com/julianahubacova/exam_scores_NN",
            tags: ["Neural Networks"],
            status: "Public"
        }
    ];

    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = ""; // Clear previous content

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        let tagElements = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join(" ");

        projectCard.innerHTML = `
            <h3>${project.title} ${project.status === "Private" ? '<span class="private-badge">🔒</span>' : ''}</h3>
            <p>${project.description}</p>
            <div class="project-tags">${tagElements}</div>
            <a href="${project.link}" class="btn" target="_blank">View on GitHub</a>
        `;

        projectsContainer.appendChild(projectCard);
    });
});

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
