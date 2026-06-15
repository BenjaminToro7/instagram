var reels = document.querySelectorAll(".reel");
var videos = document.querySelectorAll("video");

// Reproducir el primer video al cargar
window.addEventListener("load", function() {
    videos[0].play().catch(function() {});
});

// Cambiar de reel al hacer scroll (IntersectionObserver)
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        var video = entry.target.querySelector("video");
        if (entry.isIntersecting) {
            videos.forEach(function(v) {
                if (v !== video) {
                    v.pause();
                    v.currentTime = 0;
                }
            });
            video.play().catch(function() {});
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
}, { threshold: 0.7 });

reels.forEach(function(reel) {
    observer.observe(reel);
});

// Click en video: pausar/reproducir
videos.forEach(function(video) {
    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// ==================== INTERACCIONES POR CADA REEL ====================
reels.forEach(function(reel) {
    var video = reel.querySelector("video");
    var corazonAnimado = reel.querySelector(".corazon");
    var likeBoton = reel.querySelector(".like");
    var likeIcono = likeBoton.querySelector("i");
    var likeSpan = likeBoton.querySelector("span");
    var comentarioBoton = reel.querySelector(".boton:nth-child(2)");
    var seguirBoton = reel.querySelector(".boton:last-child");
    var seguirSpan = seguirBoton.querySelector("span");

    // ----- LIKE (doble clic en video) -----
    video.addEventListener("dblclick", function() {
        darLike(likeIcono, likeSpan, corazonAnimado);
    });

    // ----- LIKE (clic en el corazón) -----
    likeBoton.addEventListener("click", function(e) {
        e.stopPropagation(); // Evita que el clic en el botón también active el click del video
        darLike(likeIcono, likeSpan, corazonAnimado);
    });

    // ----- COMENTARIO (clic en el ícono de comentario) -----
    comentarioBoton.addEventListener("click", function(e) {
        e.stopPropagation();
        var comentario = prompt("Escribe tu comentario:");
        if (comentario && comentario.trim() !== "") {
            // Mostrar el comentario en un alert (básico)
            alert("Comentario enviado: " + comentario);
            // Opcional: incrementar contador de comentarios
            var comentarioSpan = comentarioBoton.querySelector("span");
            var numComentarios = parseInt(comentarioSpan.innerText);
            if (!isNaN(numComentarios)) {
                comentarioSpan.innerText = numComentarios + 1;
            }
        }
    });

    // ----- SEGUIR / DEJAR DE SEGUIR -----
    seguirBoton.addEventListener("click", function(e) {
        e.stopPropagation();
        if (seguirSpan.innerText === "Seguir") {
            seguirSpan.innerText = "Siguiendo";
            seguirBoton.style.color = "#0095f6";
            // Opcional: cambiar ícono
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
    });
});

// Función para dar like (actualiza ícono, color y contador)
function darLike(icono, span, corazonAnimado) {
    var esLike = icono.classList.contains("fa-regular");
    if (esLike) {
        icono.classList.remove("fa-regular");
        icono.classList.add("fa-solid");
        icono.style.color = "red";
        // Aumentar contador
        var numero = parseInt(span.innerText);
        if (!isNaN(numero)) {
            var nuevoNumero = numero + 1;
            span.innerText = nuevoNumero + (numero >= 1000 ? "k" : "");
        }
        // Mostrar animación del corazón
        corazonAnimado.classList.add("activo");
        setTimeout(function() {
            corazonAnimado.classList.remove("activo");
        }, 700);
    }
    // Si ya tiene like, no hacemos nada (no permite quitar like para simplificar)
}