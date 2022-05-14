function toggleMenu() {
    document
        .getElementsByClassName("navigation")[0]
        .classList.toggle("responsive");
}

let date = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdays", "Friday", "Saturday"]
let currentWeekday = weekdays[date.getDay()];
let currentDay = date.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currentMonth = months[date.getMonth()];
let currentYear = date.getFullYear();
let padronizedDate = currentWeekday+", "+currentDay+" "+currentMonth+" "+currentYear;
document.querySelector('#date_time').textContent = padronizedDate;