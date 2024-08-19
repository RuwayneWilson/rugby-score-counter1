let homeCount = 0
let guestCount = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
//Home Buttons
function homeTwo() {
 homeCount += 2
 homeEl.textContent = homeCount
}

function homeThree() {
 homeCount += 3
 homeEl.textContent = homeCount
}

function homeFive() {
 homeCount += 5
 homeEl.textContent = homeCount
}

//Guest Buttons
function guestTwo() {
 guestCount += 2
 guestEl.textContent = guestCount
}

function guestThree() {
 guestCount += 3
 guestEl.textContent = guestCount
}

function guestFive() {
 guestCount += 5
 guestEl.textContent = guestCount
}

function restart() {
    homeCount = 0
    homeEl.textContent = homeCount
    guestCount = 0
    guestEl.textContent = guestCount
}