const username = "yourusername"; // Replace with your GitHub username
const repoURL = `https://api.github.com/users/${julianahubacova}/repos`;

fetch(repoURL)
    .then(response => response.json())
    .then(data => {
        let projectContainer = document.getElementById("projects");
        data.forEach(repo => {
            let project = document.createElement("li");
            project.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || "No description"}`;
            projectContainer.appendChild(project);
        });
    })
    .catch(error => console.log("Error fetching repos:", error));
