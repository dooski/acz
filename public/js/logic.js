var app = document.getElementById("app")
var app2 = document.getElementById("app2")
var app3 = document.getElementById("app3")
var bart = document.getElementById("bart")
var music = document.getElementById("acnl")
var okButton = document.getElementById("okButton")
var showPoemButton = document.getElementById("showPoemButton")


var words1 = "Hello, poetry people! My name is Bart the Chameleon, and I've been put in charge of hosting the Animal Crossing Poetry Zine reading!"
var words2 = "Progress was held up for a while as Dan was still actually learning how to code, oh worm."
var words3 = "But! They've figured it out and should have a beta for us all to review pretty soon! Now give me an excited  'Oh worm!'  and we can do a preview of one poem now!"

var wordsRT = "Time to introduce our first poet: Rachelle Toarmino!"
var words2RT = '"Rachelle is the author of the poetry collection That Ex, out now from Big Lucks on 6/9/2020 (lmao). She is the editor in chief of Peach Mag."'
var words3RT = "Oh worm! Would love to eat peaches right now..."

function speaking() {
    okButton.setAttribute("hidden", true)
    music.volume = 0.8;
    music.play()
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(words1),
        cursor: ""
    });
    speakingNoise(words1);
    typewriter
        .typeString(words1)
        .start();
    setTimeout(speakingContinued, 7000)
}
function speakingContinued() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2),
        cursor: ""
    });
    speakingNoise(words2);
    bart.src = "./bart/sad.png"
    typewriter2
        .typeString(words2)
        .start();
    setTimeout(speakingFinished, 4000)
}
function speakingFinished() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3),
        cursor: ""
    });
    speakingNoise(words3);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3)
        .start();
    setRT();
}

function setRT() {
    okButton.setAttribute("onclick", "speakingRT()");
    okButton.innerHTML = "Oh worm!";
    okButton.removeAttribute("hidden")
}

function speakingRT() {
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    okButton.setAttribute("hidden", true)
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsRT),
        cursor: ""
    });
    speakingNoise(wordsRT);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsRT)
        .start();
    setTimeout(speakingContinuedRT, 3000)
}
function speakingContinuedRT() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2RT),
        cursor: ""
    });
    speakingNoise(words2RT);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2RT)
        .start();
    setTimeout(speakingFinishedRT, 6000)
}
function speakingFinishedRT() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3RT),
        cursor: ""
    });
    speakingNoise(words3RT);
    bart.src = "./bart/huh.png"
    typewriter3
        .typeString(words3RT)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

function lengthGuess(words) {
    function shortenWord(str) {
        if (str.length > 1) {
            return str[0] + str[str.length - 1];
        }
        return str;
    }
    processed_script = words.replace(/[^a-z]/gi, ' ').split(' ').map(shortenWord).join('');
    var delay = (processed_script.length * 70) / words.length
    console.log(delay)
    return delay
}