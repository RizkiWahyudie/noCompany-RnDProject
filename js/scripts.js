// NAV ACTIVE
var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("List_item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}
// NAV ACTIVE CLOSE //

// DARK MODE
//create a variable to monitor the input checkbox
const colorSwitch = document.getElementById("input-color-switch");
//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

function checkMode() {
    console.log("checking...");
    if (colorSwitch.checked) {
        console.log("dark on");
        darkModeOn();
    } else {
        console.log("dark off");
        darkModeOff();
    }
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

// DARK MODE CLOSE

// HISTORY VIEW MOBILE
function myHistory() {
    var x = document.getElementById("mobileHistory");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// HISTORY CLOSE


// SIDEBAR 
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// WEB TANPA RELOAD