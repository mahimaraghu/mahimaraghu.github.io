var SkillContainer = document.getElementById('SkillContainer');
var SkillHTML = "";

function getStarsHTML(stars) {
    var sHTML = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
            sHTML += `<i class="fas fa-star"></i>`
        } else {
            sHTML += `<i class="far fa-star"></i>`
        }
    }

    return sHTML;
}

fetch("../data/skills.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    //.then() is used when we know the object on which it is called upon returns a Promise Object
    .then(data => {
            for (let type in data) {
                // Object.keys(data).forEach(type => {

                var SkillItemHTML = "";
                data[type].forEach(s => {
                            SkillItemHTML += `
                <div class="skill">
                    ${s.icon ? `<i class="${s.icon}"></i>`: ""}
                    <span class="skill_text">${s.name}</span>
                    <span class="stars">
                    ${getStarsHTML(s.stars)}
                    </span>
                </div>`;
            })
            SkillHTML += `
            <div class="skill-type">
                <h3 class="sec-heading2 skill-heading">${type}</h3>
                <div class="skills">
                    ${SkillItemHTML}
                </div>
            </div>
            `;
            // }); // ForEach End
        } // For End

        SkillContainer.innerHTML = SkillHTML;

    })
    .catch(err => console.error(err))

// Promise is a Object which either will return Resolved/Rejected (kind of true/false)
// fetch(url,options).then().then().catch()

let exp=document.getElementById("ExpContainer");
let expHTML=""
/*
<div class="exp-group">
    <h3 class="sec-heading2">Trainings</h3>
    <ul class="exp-wrap">
        <li>
            Title
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, molestiae.</p>
        </li>
    </ul>
</div>
*/
fetch("../data/exp.json",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }

})
.then(res=>res.json())
.then(data=>{
    for(let d in data){
        let  eHTML=""
        data[d].forEach(j => {
            console.log(j);
            eHTML+=` <li>
            ${j.title}
            <p>${j.desc}</p>
        </li>`
        })
        expHTML+=`
        <div class="exp-group">
    <h3 class="sec-heading2">${d}</h3>
    <ul class="exp-wrap">
        ${eHTML}
    </ul>
</div>`

    }
    exp.innerHTML=expHTML;
    
})
.catch(error=>console.error(error))