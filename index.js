let homeEl= document.getElementById("home-points")
let guestEl= document.getElementById("guest-points")
let homeScore =0
let guestScore=0

function add1Home(){
  homeScore += 1
    homeEl.innerText = homeScore
}
function add2Home(){
  homeScore += 2
    homeEl.innerText = homeScore
}
function add3Home(){
  homeScore += 3
    homeEl.innerText = homeScore
}
function add1Guest(){
  guestScore += 1
    guestEl.innerText = guestScore
}
function add2Guest(){
 guestScore += 2
    guestEl.innerText = guestScore
}
function add3Guest(){
  guestScore += 3
    guestEl.innerText = guestScore
}