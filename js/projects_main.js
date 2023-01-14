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
            ProjectHTML += ` <div class="proj-card">
                    <div class="proj-card__side proj-card__side--front">
                        <div class="proj-card__picture" style="background-image: linear-gradient(to right bottom, #003B36, #012622), url(${i.imgLink})">
                            &nbsp;
                        </div>
                        <h4 class="proj-card__heading">
                            <span class="proj-card__heading-span">${i.title}</span>
                        </h4>
                        <div class="proj-card__details">
                            <div class="meta">
                            <i class="far fa-calendar-alt"></i>
                            ${i.date}
                            </div>
                            <div class="meta">
                            <i class="fas fa-bookmark"></i>
                            <span>${i.tag}</span>
                            </div>
                            <p>${i.desc}</p>
                        </div>
                    </div>
                    <div class="proj-card__side proj-card__side--back">
                        <div class="proj-card__cta">
                            <a href="${i.demoLink}" target="_blank">See Live!</a>
                        </div>
                    </div>
                </div>`
        }
        project.innerHTML = ProjectHTML
    })
    .catch(error => console.error(error))