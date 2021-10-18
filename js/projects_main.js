let project = document.getElementById("ProjectsContainer");
let ProjectHTML = ""
fetch("../data/projects.json", {
        method: "GET",
        Headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        for (let i of data) {
            ProjectHTML += `<div class="card">
                <figure class="card-img-top">
                <img src="${i.imgLink}" alt="${i.title}">
                </figure>
                <div class="card-body">
                    <h5 class="card-title">${i.title}</h5>
                    <p class="card-text">${i.desc}</p>
                    <a href="${i.demoLink}" target="_blank" class="btn btn-primary ">DEMO</a>
                </div>
            </div>`
        }
        project.innerHTML = ProjectHTML
    })
    .catch(error => console.error(error))