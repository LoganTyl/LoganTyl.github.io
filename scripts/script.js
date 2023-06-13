const yearSpan = document.querySelector("span#currentYear");

const setCurrentYear = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    yearSpan.innerHTML = currentYear;
}

setCurrentYear();