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
var words5 = `Or, I guess if you don't wanna hear my order, you can skip around . . .`
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
var words3BW = `I tried making kimchi once, but realized I just wanted crickets instead. Oh worm.`

//Amanda Silberling
var wordsAS = `Still thinking about crickets... anyway, here's our next poet! Amanda Silberling!`
var words2AS = `"Amanda Silberling is a poet, journalist, and multimedia artist whose work has 
appeared in NPR, Hyperallergic, The Rumpus, Kotaku, and other places. She was a 2019-2020 Princeton in 
Asia Fellow in Laos at the Luang Prabang Film Festival, and she is currently the Van Doren Fellow at 
the University of Pennsylvania's Center for Programs in Contemporary Writing. Her favorite 
villager is Cherry (don't tell June), and she enjoys wishing on shooting stars with Celeste. 
Find her at amandasilberling.com, on twitter at @asilbwrites, or in the park playing Pokémon Go."`
var words3AS = `Pokemon Go to the Polls.`

//Rachel Tanner
var wordsRTA = `Next up is Rachel Tanner!`
var words2RTA = `"Rachel Tanner (she/her) is an Alabamian writer whose work has recently appeared in Tiny Molecules, Impossible Task, Tenderness Lit, and elsewhere. She tweets @rickit."`
var words3RTA = `Rachel has included a content warning for domestic violence on this poem. If you would like, you may skip to our next poem.`

//Adrian Belmes
var wordsAB = `Ok, time for Adrian Belmes!`
var words2AB = `"Adrian Belmes is a Jewish Ukrainian poet residing currently in San Diego. He is a senior editor for Fiction International, editor in chief of Badlung Press, and vice president of State Zine Collective. He has been previously published in SOFT CARTEL, Philosophical Idiot, and elsewhere. You can find him at adrianbelmes.com or @adrian_belmes."`
var words3AB = `Philosophical Idiot is my title in New Horizons, oh worm!`

//Ale Rosales
var wordsAR = `Next up: Ale Rosales!`
var words2AR = `"Ale Rosales (she/they) is a leftists mestizx lesbian. She lives in Tijuana/SD 
with her cat, Suh, whom she adores. She is an editor for Chaparral Press, and has previously 
published work in The Fruit Tree. You can find her on twitter @sorginale, and you can find her 
zines at issuu.com/mossmoon."`
var words3AR = `I wonder if Suh would like Bob?`

//Josefine Stargardt
var wordsJS = `Woo, we are breezing along! Here's Josefine Stargardt next!`
var words2JS = `"Josefine Stargardt is a bilingual poet currently based in Germany. She will never forgive herself for deleting her very first Animal Crossing town. Her words can be found in Homology Lit, The Cardiff Review, and elsewhere."`
var words3JS = `It's a long story but . . . I'm actually banned from Germany.`

//Sarah Robbins
var wordsSR = `I'd get a glass of water if I could drink. But! I can't! Sarah Robbins Time!`
var words2SR = `"Sarah Robbins is a  washed-up humanities major who graduated from Missouri Southern State University in May of 2020. You can follow her on Instagram (@tri_saraahtops) and Twitter (@saaraahkate)."`
var words3SR = `Oh worm! Missouri! I'm also banned from Missouri.`

//Josh Smith
var wordsJS2 = `Flash round! Josh Smith coming at us with a quickie.`
var words2JS2 = `"Josh Smith was born in Buffalo, raised in punk, and currently lives inside his own heart. Josh has choreographed fight scenes for two different poetry events, which must be some sort of record."`
var words3JS2 = `My cousin Flick was also raised in punk, oh worm.`

//Imogen L. Smiley
var wordsIS = `Oh worm! It's Imogen L. Smiley.`
var words2IS = `"Imogen. L. Smiley (she/her) is a twenty-two-year-old writer from Essex, UK. She has anxiety,
depression and a relentless love of dogs. Although poetry isn't her strongest area of
writing, she does enjoy the ability to neglect the rules of style, and come up with
convoluted imagery that would otherwise be unconventional and inappropriate in prose."`
var words3IS = `I always neglect the rules of style by being naked.`

//Rae White
var wordsRW = `Up next we have Rae White!`
var words2RW = `"Rae White is a non-binary transgender poet, writer and zinester. Their poetry collection Milk Teeth (UQP) won the 2017 Thomas Shapcott Poetry Prize and was shortlisted for the 2019 Victorian Premier’s Literary Award for Poetry. Rae’s short story 'The Body Remembers' won Second Prize in the 2019 Rachel Funari Prize for Fiction."`
var words3RW = `This poem was originally published at Subbed In: Ibes House and in Rae's poetry collection Milk Teeth, oh worm.`

//Jeff Schiff
var wordsJS3 = `Our next two poets wrote poems more about animals crossing than Animal Crossing, but still counts! First up: Jeff Schiff!`
var words2JS3 = `"Jeff Schiff is author of That hum to go by (MAMMOTH Books), Mixed Diction (MAMMOTH Books),
Burro Heart (MAMMOTH Books), The Homily of
Infinitude (Pennsylvania Review Press), and The Rats of Patzcuaro (Poetry Link). His work
has appeared internationally in more than seventy periodicals, including Grand Street, The
Ohio Review, and The Southwest Review. He has taught at Columbia College Chicago since 1987."`
var words3JS3 = `Hm, maybe I should finally get an MFA . . .`

//Noah Falck
var wordsNF = `Second of the animals crossing: Noah Falck!`
var words2NF = `"Noah Falck (he/him/his) is the author of Exclusions (Tupelo Press, 2020). He lives in Buffalo, New York. "`
var words3NF = `Go Bills!`

//Will Hall
var wordsWH = `Ok! Enter: Will Hall!`
var words2WH = `"Will Hall (they/them) is a nonbinary creative residing in Philadelphia, PA. As a person with
Borderline Personality Disorder, much of their work concentrates on finding nuance in a
world they are predisposed to interpret as “All or Nothing.” Will’s art can be found on
instagram @whdoodles or on twitter @williamjdhall."`
var words3WH = `Oh worm, Philly! You think they make cheesesteaks with crickets there?`

//Rachel Small
var wordsRS = `Our next poet is Rachel Small! I didn't mean for it to rhyme with Will Hall!`
var words2RS = `"Rachel Small is a poet who is working on her bio :)"`
var words3RS = `Seriously, I didn't mean for it to rhyme.`

//Iona Murphy
var wordsIM = `Iona Murphy is here! (In spirit!)`
var words2IM = `"Iona Murphy (she/her) is a student and spends most of her time engrossed in the works of
Sylvia Plath. She describes her writing as 'straddling the fine line between poetry and
oversharing.' She has writing published with Black Bough, Teen Belle, and Brave Voices. 
You can keep up with her on Twitter: @write_with_Iona and Instagram: ionasmurfy"`
var words3IM = `. . . is "oh worm" getting old?`

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
    setJS();
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
        delay: lengthGuess(words2AB) - 4,
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

//Ale Rosales
function setAR() {
    showPoemButton.setAttribute("data-target", "#ar-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingAR()
}
function speakingAR() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsAR),
        cursor: ""
    });
    speakingNoise(wordsAR);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsAR)
        .start();
    setTimeout(speakingContinuedAR, 4000)
}
function speakingContinuedAR() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2AR) - 4,
        cursor: ""
    });
    speakingNoise(words2AR);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2AR)
        .start();
    setTimeout(speakingFinishedAR, 12000)
}
function speakingFinishedAR() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3AR),
        cursor: ""
    });
    speakingNoise(words3AR);
    bart.src = "./bart/huh.png"
    typewriter3
        .typeString(words3AR)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Josefine Stargardt
function setJS() {
    showPoemButton.setAttribute("data-target", "#js-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingJS()
}
function speakingJS() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsJS),
        cursor: ""
    });
    speakingNoise(wordsJS);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsJS)
        .start();
    setTimeout(speakingContinuedJS, 4000)
}
function speakingContinuedJS() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2JS) - 4,
        cursor: ""
    });
    speakingNoise(words2JS);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2JS)
        .start();
    setTimeout(speakingFinishedJS, 10000)
}
function speakingFinishedJS() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3JS),
        cursor: ""
    });
    speakingNoise(words3JS);
    bart.src = "./bart/sad.png"
    typewriter3
        .typeString(words3JS)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Sarah Robbins
function setSR() {
    showPoemButton.setAttribute("data-target", "#sr-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingSR()
}
function speakingSR() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsSR),
        cursor: ""
    });
    speakingNoise(wordsSR);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsSR)
        .start();
    setTimeout(speakingContinuedSR, 4000)
}
function speakingContinuedSR() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2SR) - 4,
        cursor: ""
    });
    speakingNoise(words2SR);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2SR)
        .start();
    setTimeout(speakingFinishedSR, 8000)
}
function speakingFinishedSR() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3SR),
        cursor: ""
    });
    speakingNoise(words3SR);
    bart.src = "./bart/sad.png"
    typewriter3
        .typeString(words3SR)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Josh Smith
function setJS2() {
    showPoemButton.setAttribute("data-target", "#js2-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingJS2()
}
function speakingJS2() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsJS2),
        cursor: ""
    });
    speakingNoise(wordsJS2);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsJS2)
        .start();
    setTimeout(speakingContinuedJS2, 4000)
}
function speakingContinuedJS2() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2JS2) - 4,
        cursor: ""
    });
    speakingNoise(words2JS2);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2JS2)
        .start();
    setTimeout(speakingFinishedJS2, 9000)
}
function speakingFinishedJS2() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3JS2),
        cursor: ""
    });
    speakingNoise(words3JS2);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3JS2)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Imogen Smiley
function setIS() {
    showPoemButton.setAttribute("data-target", "#is-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingIS()
}
function speakingIS() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsIS),
        cursor: ""
    });
    speakingNoise(wordsIS);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsIS)
        .start();
    setTimeout(speakingContinuedIS, 4000)
}
function speakingContinuedIS() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2IS) - 7,
        cursor: ""
    });
    speakingNoise(words2IS);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2IS)
        .start();
    setTimeout(speakingFinishedIS, 12000)
}
function speakingFinishedIS() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3IS),
        cursor: ""
    });
    speakingNoise(words3IS);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3IS)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Rae White
function setRW() {
    showPoemButton.setAttribute("data-target", "#rw-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingRW()
}
function speakingRW() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsRW),
        cursor: ""
    });
    speakingNoise(wordsRW);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsRW)
        .start();
    setTimeout(speakingContinuedRW, 4000)
}
function speakingContinuedRW() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2RW) - 4,
        cursor: ""
    });
    speakingNoise(words2RW);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2RW)
        .start();
    setTimeout(speakingFinishedRW, 11000)
}
function speakingFinishedRW() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3RW),
        cursor: ""
    });
    speakingNoise(words3RW);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3RW)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Jeff Schiff
function setJS3() {
    showPoemButton.setAttribute("data-target", "#js3-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingJS3()
}
function speakingJS3() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsJS3),
        cursor: ""
    });
    speakingNoise(wordsJS3);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsJS3)
        .start();
    setTimeout(speakingContinuedJS3, 5000)
}
function speakingContinuedJS3() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2JS3) - 6,
        cursor: ""
    });
    speakingNoise(words2JS3);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2JS3)
        .start();
    setTimeout(speakingFinishedJS3, 14000)
}
function speakingFinishedJS3() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3JS3),
        cursor: ""
    });
    speakingNoise(words3JS3);
    bart.src = "./bart/huh.png"
    typewriter3
        .typeString(words3JS3)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Noah Falck
function setNF() {
    showPoemButton.setAttribute("data-target", "#nf-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingNF()
}
function speakingNF() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsNF),
        cursor: ""
    });
    speakingNoise(wordsNF);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsNF)
        .start();
    setTimeout(speakingContinuedNF, 4000)
}
function speakingContinuedNF() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2NF) - 5,
        cursor: ""
    });
    speakingNoise(words2NF);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2NF)
        .start();
    setTimeout(speakingFinishedNF, 6000)
}
function speakingFinishedNF() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3NF),
        cursor: ""
    });
    speakingNoise(words3NF);
    bart.src = "./bart/happy.png"
    typewriter3
        .typeString(words3NF)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Will Hall
function setWH() {
    showPoemButton.setAttribute("data-target", "#wh-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingWH()
}
function speakingWH() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsWH),
        cursor: ""
    });
    speakingNoise(wordsWH);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsWH)
        .start();
    setTimeout(speakingContinuedWH, 4000)
}
function speakingContinuedWH() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2WH) - 4,
        cursor: ""
    });
    speakingNoise(words2WH);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2WH)
        .start();
    setTimeout(speakingFinishedWH, 8000)
}
function speakingFinishedWH() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3WH),
        cursor: ""
    });
    speakingNoise(words3WH);
    bart.src = "./bart/huh.png"
    typewriter3
        .typeString(words3WH)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Rachel Small
function setRS() {
    showPoemButton.setAttribute("data-target", "#rs-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingRS()
}
function speakingRS() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsRS),
        cursor: ""
    });
    speakingNoise(wordsRS);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsRS)
        .start();
    setTimeout(speakingContinuedRS, 6000)
}
function speakingContinuedRS() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2RS) - 6,
        cursor: ""
    });
    speakingNoise(words2RS);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2RS)
        .start();
    setTimeout(speakingFinishedRS, 7000)
}
function speakingFinishedRS() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3RS),
        cursor: ""
    });
    speakingNoise(words3RS);
    bart.src = "./bart/sad.png"
    typewriter3
        .typeString(words3RS)
        .start();
    document.getElementById("showPoemButton").removeAttribute("hidden")
}

//Iona Murphy
function setIM() {
    showPoemButton.setAttribute("data-target", "#im-poem-modal");
    showPoemButton.setAttribute("hidden", true)
    okButton.setAttribute("hidden", true)
    app.innerHTML = ""
    app2.innerHTML = ""
    app3.innerHTML = ""
    speakingIM()
}
function speakingIM() {
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: lengthGuess(wordsIM),
        cursor: ""
    });
    speakingNoise(wordsIM);
    bart.src = "./bart/happy.png"
    typewriter
        .typeString(wordsIM)
        .start();
    setTimeout(speakingContinuedIM, 4000)
}
function speakingContinuedIM() {
    var typewriter2 = new Typewriter(app2, {
        loop: false,
        delay: lengthGuess(words2IM) - 3,
        cursor: ""
    });
    speakingNoise(words2IM);
    bart.src = "./bart/neutral.png"
    typewriter2
        .typeString(words2IM)
        .start();
    setTimeout(speakingFinishedIM, 11000)
}
function speakingFinishedIM() {
    var typewriter3 = new Typewriter(app3, {
        loop: false,
        delay: lengthGuess(words3IM),
        cursor: ""
    });
    speakingNoise(words3IM);
    bart.src = "./bart/sad.png"
    typewriter3
        .typeString(words3IM)
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