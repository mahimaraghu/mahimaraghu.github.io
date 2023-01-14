let greet = document.getElementById("greet")
window.onload = function() {
    var date = new Date();
    var hours = date.getHours();
    if ((hours >= 4) && (hours <= 12)) {
        greet.innerHTML = "Good Morning,";
    } else if ((hours >= 13) && (hours <= 16)) {
        greet.innerHTML = "Good Afternoon,";

    } else {
        greet.innerHTML = "Good Evening,";
    }
}