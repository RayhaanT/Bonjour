var text
var clicks = 0
var fontSize = 10
var degrees = 1

window.onload = function() {
    text = document.getElementById("text")
    text.style.position = "absolute"
    //text.style.top = window.innerHeight / 2
    //text.style.left = window.innerWidth / 2
    text.style.fontSize = fontSize + "px"
    document.addEventListener('mousedown', docClicked)
}

function docClicked(evt) {
    clicks++
    fontSize+=2
    text.style.fontSize = fontSize + "px"
    if(clicks > 5) {
        text.style.transform = "rotate(" + degrees + "deg)";
        degrees += 10
    }
    if(clicks > 10) {
        text.innerHTML = "Bonjour le monde"
    }
}