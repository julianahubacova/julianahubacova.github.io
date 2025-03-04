const username = "julianahubacova"; 
const repoURL = `https://api.github.com/users/${username}/repos`;

fetch(repoURL)
    .then(response => response.json())
    .then(data => {
        let projectContainer = document.getElementById("projects-list");
        data.forEach(repo => {
            let project = document.createElement("div");
            project.classList.add("project-card");
            project.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available"}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            projectContainer.appendChild(project);
        });
    })
    .catch(error => console.log("Error fetching repos:", error));
