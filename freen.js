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

const audio = document.getElementById("audio");
const playButton = document.getElementById("playMusic");

if(playButton && audio){

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

}

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
   FIREBASE MESSAGE SYSTEM
========================== */


const sendMessageBtn = document.getElementById("sendMessage");

const messageList = document.getElementById("messageList");


if(sendMessageBtn){


sendMessageBtn.addEventListener("click", async ()=>{


    const name =
    document.getElementById("name").value.trim();


    const country =
    document.getElementById("country").value.trim();


    const message =
    document.getElementById("message").value.trim();



    if(name === "" || country === "" || message === ""){

        alert("Please fill up all fields 💜");

        return;

    }



    try{


        await db.collection("messages").add({

            name:name,

            country:country,

            message:message,

            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        });



        alert("Message sent successfully 💜");


        document.getElementById("name").value="";
        document.getElementById("country").value="";
        document.getElementById("message").value="";


    }
    catch(error){

        console.log(error);

        alert("Error sending message");

    }


});


}



/* ==========================
   SHOW FAN MESSAGES
========================== */


if(messageList){


db.collection("messages")
.orderBy("createdAt","desc")
.onSnapshot(snapshot=>{


    messageList.innerHTML="";


    snapshot.forEach(doc=>{


        const data = doc.data();


        messageList.innerHTML += `

        <div class="message-card">

            <h3>
            ${data.name}
            </h3>


            <span>
            ${data.country}
            </span>


            <p>
            ${data.message}
            </p>


        </div>

        `;


    });


});


}

/* ==========================
   Placeholder
   (Part 3B)
========================== */

function startConfetti(){

    console.log("Confetti starts...");

}

function showSection(id){

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.add("active");
    }

    window.scrollTo(0,0);
}
        


