// Seleccionar todos los reels y videos
var reels = document.querySelectorAll(".reel");
var videos = document.querySelectorAll("video");

// Reproducir el primer video al cargar la página
window.onload = function() {
    if (videos[0]) videos[0].play();
};

// Detectar qué reel está visible en pantalla (con IntersectionObserver)
var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var video = entry.target.querySelector("video");
        if (entry.isIntersecting) {
            // Pausar todos los demás videos
            for (var j = 0; j < videos.length; j++) {
                if (videos[j] !== video) {
                    videos[j].pause();
                    videos[j].currentTime = 0;
                }
            }
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }
}, { threshold: 0.7 });

for (var i = 0; i < reels.length; i++) {
    observer.observe(reels[i]);
}

// Al hacer clic en un video: pausar o reproducir
for (var i = 0; i < videos.length; i++) {
    videos[i].onclick = function() {
        if (this.paused) this.play();
        else this.pause();
    };
}

// ----- Funciones para like, comentario y seguir -----
function darLike(icono, span, corazon) {
    if (icono.classList.contains("fa-regular")) {
        icono.classList.remove("fa-regular");
        icono.classList.add("fa-solid");
        icono.style.color = "red";
        // Aumentar contador
        var numero = parseInt(span.innerText);
        if (!isNaN(numero)) {
            span.innerText = numero + 1;
        }
        // Mostrar animación
        corazon.classList.add("activo");
        setTimeout(function() { corazon.classList.remove("activo"); }, 700);
    }
}

// Asignar eventos a cada reel
for (var i = 0; i < reels.length; i++) {
    var reel = reels[i];
    var video = reel.querySelector("video");
    var corazonAnimado = reel.querySelector(".corazon");
    var likeBoton = reel.querySelector(".like");
    var likeIcono = likeBoton.querySelector("i");
    var likeSpan = likeBoton.querySelector("span");
    var comentarioBoton = reel.querySelector(".boton:nth-child(2)");
    var seguirBoton = reel.querySelector(".boton:last-child");
    var seguirSpan = seguirBoton.querySelector("span");

    // Doble clic en video: like
    video.ondblclick = function() {
        darLike(likeIcono, likeSpan, corazonAnimado);
    };

    // Clic en botón like
    likeBoton.onclick = function(e) {
        e.stopPropagation();  // Evita que el video también se pause/reproduzca
        darLike(likeIcono, likeSpan, corazonAnimado);
    };

    // Clic en botón comentario
    comentarioBoton.onclick = function(e) {
        e.stopPropagation();
        var comentario = prompt("Escribe tu comentario:");
        if (comentario && comentario.trim() !== "") {
            alert("Comentario enviado: " + comentario);
            var comentarioSpan = comentarioBoton.querySelector("span");
            var num = parseInt(comentarioSpan.innerText);
            if (!isNaN(num)) comentarioSpan.innerText = num + 1;
        }
    };

    // Clic en botón seguir / dejar de seguir
    seguirBoton.onclick = function(e) {
        e.stopPropagation();
        if (seguirSpan.innerText === "Seguir") {
            seguirSpan.innerText = "Siguiendo";
            seguirBoton.style.color = "#0095f6";
            var icono = seguirBoton.querySelector("i");
            icono.classList.remove("fa-user-plus");
            icono.classList.add("fa-user-check");
        } else {
            seguirSpan.innerText = "Seguir";
            seguirBoton.style.color = "white";
            var icono = seguirBoton.querySelector("i");
            icono.classList.remove("fa-user-check");
            icono.classList.add("fa-user-plus");
        }
    };
}