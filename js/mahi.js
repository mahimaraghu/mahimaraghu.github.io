let g = document.getElementsByClassName("greet")[0]

var date = new Date();
var hours = date.getHours();
if ((hours >= 4) && (hours <= 12)) {
    g.innerHTML = "Good Morning,";
} else if ((hours >= 13) && (hours <= 16)) {
    g.innerHTML = "Good Afternoon,";

} else {
    g.innerHTML = "Good Evening,";
}


let form = document.getElementById("site")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        feedback: document.getElementById("feedback").value
    }
    console.log(data);
    // TODO: Send this data to a DB using a Backend
    alert("feedback submitted");
    form.reset();

})