const reels = document.querySelectorAll(".reel");
const videos = document.querySelectorAll("video");



// PRIMER VIDEO

window.addEventListener("load", () => {

    videos[0].play().catch(()=>{});

});




// CAMBIAR DE REEL

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        const video = entry.target.querySelector("video");

        if(entry.isIntersecting){

            videos.forEach(v=>{

                if(v!==video){

                    v.pause();

                    v.currentTime=0;

                }

            });

            video.play().catch(()=>{});

        }

        else{

            video.pause();

            video.currentTime=0;

        }

    });

},{
    threshold:0.7
});



reels.forEach(reel=>{

    observer.observe(reel);

});






// CLICK -> PAUSE / PLAY

videos.forEach(video=>{

    video.addEventListener("click",()=>{

        if(video.paused){

            video.play();

        }

        else{

            video.pause();

        }

    });

});







// DOBLE CLICK -> LIKE

reels.forEach(reel=>{

    const video = reel.querySelector("video");

    const corazon = reel.querySelector(".corazon");

    const like = reel.querySelector(".like i");



    video.addEventListener("dblclick",()=>{

        like.classList.remove("fa-regular");

        like.classList.add("fa-solid");

        like.style.color="red";



        corazon.classList.add("activo");



        setTimeout(()=>{

            corazon.classList.remove("activo");

        },700);

    });

});