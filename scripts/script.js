const yearSpan = document.querySelector("span#currentYear");

setCurrentYear();

const setCurrentYear = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    yearSpan.innerHTML = currentYear;
}