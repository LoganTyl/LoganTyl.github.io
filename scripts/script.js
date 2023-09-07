const yearSpan = document.getElementById("currentYear");
const hamburgerIcon = document.getElementsByClassName("hamburgerIcon")[0];
const hamburgerLines = hamburgerIcon.getElementsByClassName("line");

const setCurrentYear = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    yearSpan.innerHTML = currentYear;
}

hamburgerIcon.addEventListener("click", () => {
    console.log("clicked")
    hamburgerIcon.classList.toggle("menuOpened")
    hamburgerIcon.classList.toggle("menuClosed")
})

setCurrentYear();