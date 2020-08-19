//DOM elements
const app = document.getElementById("app")
const app2 = document.getElementById("app2")
const app3 = document.getElementById("app3")
const bart = document.getElementById("bart")
const name = document.getElementById("name")
const music = document.getElementById("acnl")
const okButton = document.getElementById("okButton")
const showPoemButton = document.getElementById("showPoemButton")
const showPoetList = document.getElementById("showList")

//cold open
var open1 = `Hello?`
var open2 = `Is my mic on?`
var open3 = `Ah! Here we go...`
//general intro
var words1 = `Hello, good folks! I'm Bart the Chameleon and I am so happy to see you!`
var words2 = `My friends and I have thrown together a little poetry collection for you
all to enjoy based on Animal Crossing, a game near and dear to our hearts, oh worm.`
var words3 = `We have over 20 poets to share with you, and I'm looking forward to hosting
such a sensational line up.`
var words4 = `So, oh worm, here's how it'll work: I'll introduce each of our poets in a curated order and
then you, dear reader, will get as long as you'd like with their piece; to read, take in, cry a lil bit, repeat.`
var words5 = `Or, I guess if you don't like the sound of my voice, you could just see a list of all the poets
and read like that . . . . .`
var words6 = `Anyway! Are we ready to go?`

//Rachelle Toarmino
var wordsRT = `Time to introduce our first poet: Rachelle Toarmino!`
var words2RT = `"Rachelle is the author of the poetry collection That Ex, out now from Big Lucks Books.
 She is the editor in chief of Peach Mag."`
var words3RT = `Oh worm! Would love to eat a peach right now...`

//Will LaPorte
var wordsWL = `Ok! Poet Two: Will LaPorte!`
var words2WL = `"Will LaPorte (he/him) is a musician, wannabe lyricist, kind of a cartoonist and 
evidently trying his hand at poetry. He lives in Kingston, NY and has a very cute/absolutely possessed by 
*something* kitty named Domino. Animal Crossing: New Leaf got him through some particularly rough times, 
so now he's here to share the love and pay it forward a bit. P.S. Dan is cute"`
var words3WL = `. . . Dan IS cute.`

//Harrison Wade
var wordsHW = `Oh worm, it's our next poet: Harrison Wade!`
var words2HW = `"Harrison Wade (he/him) writes and lives between Vancouver and Toronto. 
His poetry has appeared in Hart House Review, Acta Victoriana, 
and Half a Grapefruit Magazine."`
var words3HW = `What's a vancouver?`

//Brian Windschitl
var wordsBW = `Lucky number 4, coming at you: it's Brian Windschitl!`
var words2BW = `"brian is a writer living in brooklyn. 
he is a digital media marketing content creator by day and meme consumer by night. 
he is currently attempting to make his own kimchi. brian’s tweets: @_brnwnd"`
var words3BW = `I tried making kimchi once, but realized I just wanted crickets instead.`

//Amanda Silberling
var wordsAS = `Still thinking about crickets... anyway, here's our next poet! Amanda Silberling!`
var words2AS = `"Amanda Silberling is a poet, journalist, and multimedia artist whose work has 
appeared in NPR, Hyperallergic, The Rumpus, Kotaku, and other places. She directed the documentary 
“We’re Here, We’re Present: Women in Punk,” which premiered in 2017 on VICE, and has since screened 
at Cineteca Madrid’s Mujeres Hechas de Punk Festival and the Art Attack Gallery in San Francisco. 
She was a 2019-2020 Princeton in Asia Fellow in Laos at the Luang Prabang Film Festival, and she 
is currently the Van Doren Fellow at the University of Pennsylvania's Center for Programs in 
Contemporary Writing. Her favorite villager is Cherry (don't tell June), and she enjoys wishing on 
shooting stars with Celeste. Find her at amandasilberling.com, on twitter at @asilbwrites, or 
in the park playing Pokémon Go."`
var words3AS = `Pokemon Go to the Polls.`

//Rachel Tanner
var wordsRTA = `Next up is Rachel Tanner!`
var words2RTA = `"Rachel Tanner (she/her) is an Alabamian writer whose work has recently appeared in Tiny Molecules, Impossible Task, Tenderness Lit, and elsewhere. She tweets @rickit."`
var words3RTA = `Rachel has included a content warning for domestic violence on this poem. If you would like, you may skip to our next poem.`

//Adrian Belmes
var wordsAB = `Ok, time for Adrian Belmes!`
var words2AB = `"Adrian Belmes is a Jewish Ukrainian poet residing currently in San Diego. He is a senior editor for Fiction International, editor in chief of Badlung Press, and vice president of State Zine Collective. He has been previously published in SOFT CARTEL, Philosophical Idiot, and elsewhere. You can find him at adrianbelmes.com or @adrian_belmes."`
var words3AB = `Philosophical Idiot is my title in New Horizons!`

setTimeout(open, 1)
//cold open
function open() {
    okButton.setAttribute("hidden", true)
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(open1),
        cursor: ""
    });
    typewriter
        .typeString(open1)
        .start();
    setTimeout(openContinued, 2000)
}
function openContinued() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(open2),
        cursor: ""
    });
    typewriter2
        .typeString(open2)
        .start();
    setTimeout(openFinished, 2000)
}
function openFinished() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(open3),
        cursor: ""
    });
    typewriter3
        .typeString(open3)
        .start();
    okButton.setAttribute("onclick", "speaking()");
    okButton.removeAttribute("hidden")
}

//general intro
function speaking() {
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    okButton.setAttribute("hidden", true)
    bart.removeAttribute("hidden")
    name.innerHTML = "Bart"
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
    setTimeout(speakingContinued, 5000)
}
function speakingContinued() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2),
        cursor: ""
    });
    speakingNoise(words2);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2)
        .start();
    setTimeout(speakingFinished, 7000)
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
    okButton.setAttribute("onclick", "speaking2()");
    okButton.innerHTML = "Tell me more!";
    okButton.removeAttribute("hidden")
}
function speaking2() {
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    okButton.setAttribute("hidden", true)
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(words4),
        cursor: ""
    });
    speakingNoise(words4);
    bart.src = "./bart/neutral.png"
    typewriter
        .typeString(words4)
        .start();
    setTimeout(speakingContinued2, 9000)
}
function speakingContinued2() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words5),
        cursor: ""
    });
    speakingNoise(words5);
    bart.src = "./bart/sad.png"
    typewriter2
        .typeString(words5)
        .start();
    setTimeout(speakingFinished2, 5000)
}
function speakingFinished2() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words6),
        cursor: ""
    });
    speakingNoise(words6);
    bart.src = "./bart/huh.png"
    typewriter3
        .typeString(words6)
        .start();
    setAS();
}

//Rachelle Toarmino
function setRT() {
    okButton.setAttribute("onclick", "speakingRT()");
    okButton.innerHTML = "Oh worm! Let's go!";
    okButton.removeAttribute("hidden")
    showPoetList.removeAttribute("hidden")
}
function speakingRT() {
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    showPoetList.setAttribute("hidden", true)
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
    showPoemButton.removeAttribute("hidden")
}

// Will LaPorte
function setWL() {
    showPoemButton.setAttribute("data-target", "#wl-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingWL()
}
function speakingWL() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsWL),
        cursor: ""
    });
    speakingNoise(wordsWL);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsWL)
        .start();
    setTimeout(speakingContinuedWL, 3000)
}
function speakingContinuedWL() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2WL) - 7,
        cursor: ""
    });
    speakingNoise(words2WL);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2WL)
        .start();
    setTimeout(speakingFinishedWL, 13000)
}
function speakingFinishedWL() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3WL),
        cursor: ""
    });
    speakingNoise(words3WL);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3WL)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

// Harrison Wade
function setHW() {
    showPoemButton.setAttribute("data-target", "#hw-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingHW()
}
function speakingHW() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsHW),
        cursor: ""
    });
    speakingNoise(wordsHW);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsHW)
        .start();
    setTimeout(speakingContinuedHW, 3000)
}
function speakingContinuedHW() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2HW),
        cursor: ""
    });
    speakingNoise(words2HW);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2HW)
        .start();
    setTimeout(speakingFinishedHW, 7000)
}
function speakingFinishedHW() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3HW),
        cursor: ""
    });
    speakingNoise(words3HW);
    bart.src = "./bart/huh.png"
    typewriter3
        .typeString(words3HW)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

// Brian Windschitl
function setBW() {
    showPoemButton.setAttribute("data-target", "#bw-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingBW()
}
function speakingBW() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsBW),
        cursor: ""
    });
    speakingNoise(wordsBW);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsBW)
        .start();
    setTimeout(speakingContinuedBW, 3000)
}
function speakingContinuedBW() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2HW),
        cursor: ""
    });
    speakingNoise(words2BW);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2BW)
        .start();
    setTimeout(speakingFinishedBW, 9000)
}
function speakingFinishedBW() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3BW) - 4,
        cursor: ""
    });
    speakingNoise(words3BW);
    bart.src = "./bart/sad.png"
    typewriter3
        .typeString(words3BW)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

// Amanda Silberling
function setAS() {
    showPoemButton.setAttribute("data-target", "#as-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingAS()
}
function speakingAS() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsAS),
        cursor: ""
    });
    speakingNoise(wordsAS);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsAS)
        .start();
    setTimeout(speakingContinuedAS, 4000)
}
function speakingContinuedAS() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2AS) - 7,
        cursor: ""
    });
    speakingNoise(words2AS);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2AS)
        .start();
    setTimeout(speakingFinishedAS, 22000)
}
function speakingFinishedAS() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3AS),
        cursor: ""
    });
    speakingNoise(words3AS);
    bart.src = "./bart/sad.png"
    typewriter3
        .typeString(words3AS)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

// Rachel Tanner
function setRTA() {
    showPoemButton.setAttribute("data-target", "#rta-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingRTA()
}
function speakingRTA() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsRTA),
        cursor: ""
    });
    speakingNoise(wordsRTA);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsRTA)
        .start();
    setTimeout(speakingContinuedRTA, 4000)
}
function speakingContinuedRTA() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2RTA) - 3,
        cursor: ""
    });
    speakingNoise(words2RTA);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2RTA)
        .start();
    setTimeout(speakingFinishedRTA, 8000)
}
function speakingFinishedRTA() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3RTA) - 3,
        cursor: ""
    });
    speakingNoise(words3RTA);
    bart.src = "./bart/neutral.png"
    typewriter3
        .typeString(words3RTA)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
    okButton.removeAttribute("hidden")
    okButton.setAttribute("onclick", "setAB()");
    okButton.innerHTML = "Skip";
}

//Adrian Belmes
function setAB() {
    showPoemButton.setAttribute("data-target", "#ab-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingAB()
}
function speakingAB() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsAB),
        cursor: ""
    });
    speakingNoise(wordsAB);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsAB)
        .start();
    setTimeout(speakingContinuedAB, 4000)
}
function speakingContinuedAB() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2AB) - 6,
        cursor: ""
    });
    speakingNoise(words2AB);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2AB)
        .start();
    setTimeout(speakingFinishedAB, 12000)
}
function speakingFinishedAB() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3AB),
        cursor: ""
    });
    speakingNoise(words3AB);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3AB)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//function to guess the length of the sentence's audio to sync up the typewriter
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