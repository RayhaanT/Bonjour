var text
var langClicks = 0
var clicks = 0
var fontSize = 10
var degreeInterval = 10
var set = true
var degrees = 10
var translations = ["Bonjour le monde", "Hallo wereld", "你好世界", "Hallo Welt", "γειά σου κόσμος", "Ciao mondo", "こんにちは世界", "여보세요 세계", "Olá mundo", "Здравствуй, мир", "Hola mundo", "Hello World"]
var index = 0

window.onload = function() {
    text = document.getElementById("text")
    text.style.position = "absolute"
    //text.style.top = window.innerHeight / 2
    //text.style.left = window.innerWidth / 2
    text.style.fontSize = fontSize + "px"
    text.style.margin = -text.clientHeight / 2 + "px 0px 0px " + -text.clientWidth / 2 + "px"
    document.addEventListener('mousedown', docClicked)
}

function docClicked(evt) {
    clicks++
    langClicks++
    fontSize+=2
    text.style.fontSize = fontSize + "px"
    if(clicks >= 5) {
        if(set) {
        setInterval(function () {
        text.style.transform = "rotate(" + degrees + "deg)";
        degrees+=degreeInterval/180
    }, 1000/60)
        }
        
        degreeInterval = (degreeInterval + 1)%40
    }
    if(langClicks >= 10) {
        text.innerHTML = translations[index]
        langClicks = 0
        index = (index+1)%12
    }
    text.style.margin = -text.clientHeight / 2 + "px 0px 0px " + -text.clientWidth / 2 + "px"
}
