var app = document.getElementById("app")



var words = "Hello, my name is Bart and I love you! Skeebee deebee doo bop"
console.log(words.length)
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