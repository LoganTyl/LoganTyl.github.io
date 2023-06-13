const yearSpan = document.getElementById("currentYear");
console.log("document", document)
console.log("year", yearSpan)

const setCurrentYear = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    yearSpan.innerHTML = currentYear;
}

setCurrentYear();