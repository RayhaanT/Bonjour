var text
var clicks = 0
var fontSize = 10
var degreeInterval = 10
var set = true
var degrees = 10

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
        if(set) {
        setInterval(function () {
        text.style.transform = "rotate(" + degrees + "deg)";
        degrees+=degreeInterval/60
    }, 1000/60)
        }
        
        degreeInterval+=4
    }
    if(clicks > 10) {
        text.innerHTML = "Bonjour le monde"
    }
}
