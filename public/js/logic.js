var app = document.getElementById("app")
var app2 = document.getElementById("app2")
var app3 = document.getElementById("app3")
var bart = document.getElementById("bart")


var words = "Hello, my name is Bart! I'm a chameleon, and I truly truly love you!"
var words2 = "Was that a little too strong? I get carried away sometimes, oh worm."
var words3 = "Sorry. I'm not used to hosting things, you see."
console.log(words.length)

function delay() {
    setTimeout(speaking, 5000)
}

function speaking() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(words),
        cursor: ""
    });
    speakingNoise(words);
    typewriter
        .typeString(words)
        .start();
    setTimeout(speakingContinued, 4000)
}
function speakingContinued() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2),
        cursor: ""
    });
    speakingNoise(words2);
    bart.src = "bart/huh.png"
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
    bart.src = "bart/sad.png"
    typewriter3
        .typeString(words3)
        .start();
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