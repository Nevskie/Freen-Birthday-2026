/* ==========================================
   HAPPY BIRTHDAY FREEN
   SCRIPT.JS - PART 3A
========================================== */

/* ==========================
   Loader
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});


/* ==========================
   Countdown Timer
========================== */

const birthday = new Date("August 8, 2026 00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        startConfetti();

        return;
    }

    const days =
    Math.floor(distance / (1000*60*60*24));

    const hours =
    Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const minutes =
    Math.floor((distance % (1000*60*60)) / (1000*60));

    const seconds =
    Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML =
    String(days).padStart(2,"0");

    document.getElementById("hours").innerHTML =
    String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);


/* ==========================
   Floating Hearts
========================== */

const heartsContainer =
document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "💜",
        "💖",
        "🤍",
        "💗",
        "💕"
    ];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (18 + Math.random()*25) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },12000);

}

setInterval(createHeart,400);


/* ==========================
   Music Player
========================== */

const audio =
document.getElementById("audio");

const playButton =
document.getElementById("playMusic");

playButton.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

        playButton.innerHTML =
        `<i class="fa-solid fa-pause"></i> Pause Music`;

    }else{

        audio.pause();

        playButton.innerHTML =
        `<i class="fa-solid fa-music"></i> Play Music`;

    }

});

audio.addEventListener("ended",()=>{

    playButton.innerHTML =
    `<i class="fa-solid fa-music"></i> Play Music`;

});


/* ==========================
   Back To Top Button
========================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================
   Smooth Navigation
========================== */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ==========================
   Scroll Reveal
========================== */

const revealElements =
document.querySelectorAll(
".card,.gallery-grid img,.message-form,footer"
);

const revealObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="all .8s ease";

    revealObserver.observe(el);

});


/* ==========================
   Placeholder
   (Part 3B)
========================== */

function startConfetti(){

    console.log("Confetti starts...");

}

function showSection(id){

    // Hide all pages
    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(id).classList.add("active");

}