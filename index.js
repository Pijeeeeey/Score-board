let homeEl = document.getElementById("home-el")
let homeCount = 0
let guestEl = document.getElementById("guest-el")
let guestCount = 0

//HOME SCORE!!!
function homeOne() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function homeTwo() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function homeThree() {
    homeCount += 3
    homeEl.textContent = homeCount
}

//GUEST SCORE!!!
function guestOne() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function guestTwo() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function guestThree() {
    guestCount += 3
    guestEl.textContent = guestCount
}