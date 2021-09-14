const cards = [
    {
        id : 1,
        logo : "./icons/logo1.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Senior Software Engineer",
        company : "So Digital Inc.",
        location : "Remote, Seoul, Tokyo, Mountain View, San Fransisco"
    },
    {
        id : 2,
        logo : "./icons/logo2.svg",
        time : "20h ago",
        availability : "Part Time",
        position : "Haskell and PureScript Dev",
        company : "National Wildlife",
        location : "Columbus, OH"
    },
    {
        id : 3,
        logo : "./icons/logo3.svg",
        time : "1d ago",
        availability : "Part Time",
        position : "Midlevel Back End Engineer ",
        company : "Photosnap Ltd.",
        location : "Russia"
    },
    {
        id : 4,
        logo : "./icons/logo4.svg",
        time : "2d ago",
        availability : "Full Time",
        position : "Senior Application Engineer",
        company : "Extreme Division",
        location : "Anywhere"
    },
    {
        id : 5,
        logo : "./icons/logo5.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Remote DevOps Engineer",
        company : "Xyz Co.",
        location : "Berlin"
    },
    {
        id : 6,
        logo : "./icons/logo6.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Desktop Support Manager",
        company : "Google Inc.",
        location : "Tokyo"
    },
    {
        id : 7,
        logo : "./icons/logo7.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "iOS Engineer",
        company : "Apple.com",
        location : "Mountain View, San Fransisco"
    },
    {
        id : 8,
        logo : "./icons/logo8.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Senior EJB Developer",
        company : "Ant Global",
        location : "Remote"
    },
    {
        id : 9,
        logo : "./icons/logo9.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Senior Frontend Developer",
        company : "Zerodha pvt. lmtd.",
        location : "Remote, Seoul, Tokyo"
    },
    {
        id : 10,
        logo : "./icons/logo10.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "App & Website Designer",
        company : "GDSC LLC",
        location : "San Fransisco"
    },
    {
        id : 11,
        logo : "./icons/logo11.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Fullstack Developer",
        company : "Web.dev",
        location : "Tokyo, San Fransisco"
    },
    {
        id : 12,
        logo : "./icons/logo12.svg",
        time : "5h ago",
        availability : "Full Time",
        position : "Technical Lead Engineer",
        company : "www.co",
        location : "Seoul"
    },
]

const mainSectionEl = document.querySelector(".main-section")
const sectionCardEl = document.querySelector(".section__card")
const toggleBtnEl = document.querySelector(".btn--toggle")
const loadMoreEl = document.querySelector(".btn--load")
const lightmodeEl = document.querySelector(".lightmode")
const circleEl = document.querySelector(".circle")
const bodyEl = document.querySelector("body")
const h2El = document.querySelector("h2")

window.addEventListener("DOMContentLoaded", function() {
    displayCards(cards)
})

toggleBtnEl.addEventListener("click", function() {
    circleEl.classList.toggle("circle--darkm")
    bodyEl.classList.toggle("body--darkm")
    mainSectionEl.classList.toggle("main-section--darkm")
})

function displayCards(cardItem) {
    let displayCard = cardItem.map(function(item) {
        return `<article class="section__card">
        <div class="logo">
          <img src="${item.logo}" alt="" />
        </div>
        <div class="card__details">
          <p>${item.time}</p>
          <p>.</p>
          <p>${item.availability}</p>
        </div>
        <h2>${item.position}</h2>
        <p id="company">${item.company}</p>
        <h3>${item.location}</h3>
      </article>`
    })
    displayCard = displayCard.join("")
    mainSectionEl.innerHTML = displayCard
}