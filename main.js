var text
var clicks = 0
var fontSize = 10

window.onload = function() {
    text = document.getElementById("text")
    text.style.fontSize = fontSize + "px"
    document.addEventListener('mousedown', docClicked)
}

function docClicked(evt) {
    clicks++
    fontSize++
    text.style.fontSize = fontSize + "px"
    if(clicks > 10) {
        text.innerHTML = "Bonjour le monde"
    }
}