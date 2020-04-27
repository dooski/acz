var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 25; /* The speed/duration of the effect in milliseconds */

// $(window).click(typeWriter())

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        sound.play(txt.charAt(i))
        i++;
        setTimeout(typeWriter, speed);
    }
}