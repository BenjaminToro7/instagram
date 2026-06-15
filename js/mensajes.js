var chats = [{
    nombre: "Arturo",
    foto: "../img/perfiles/arturo.jpg",
    mensajes: [
        { texto: "Hola bro", tipo: "received" },
        { texto: "Hola", tipo: "sent" }
    ]
}];

var listaChats = document.getElementById("listaChats");
var contenedor = document.getElementById("contenedorMensajes");
var nombreChat = document.getElementById("nombreChat");
var fotoUsuario = document.getElementById("fotoUsuario");
var header = document.querySelector(".headerChat");
var enviar = document.getElementById("enviarMensajeDiv");

// Mostrar lista de chats
for (var i = 0; i < chats.length; i++) {
    var chat = chats[i];
    var ultimoMensaje = chat.mensajes[chat.mensajes.length - 1].texto;
    listaChats.innerHTML += '<div class="chat">' +
        '<img src="' + chat.foto + '">' +
        '<div class="textoChat">' +
            '<h4>' + chat.nombre + '</h4>' +
            '<div class="last-msg">' + ultimoMensaje + '</div>' +
        '</div>' +
    '</div>';
}

// Agregar eventos a cada chat
var chatsDiv = document.querySelectorAll(".chat");
for (var i = 0; i < chatsDiv.length; i++) {
    chatsDiv[i].addEventListener("click", (function(indice) {
        return function() { abrirChat(indice); };
    })(i));
}

function abrirChat(i) {
    var chat = chats[i];
    document.getElementById("mensajeInicio").style.display = "none";
    header.style.display = "flex";
    enviar.style.display = "flex";
    nombreChat.textContent = chat.nombre;
    fotoUsuario.src = chat.foto;
    contenedor.innerHTML = "";
    for (var j = 0; j < chat.mensajes.length; j++) {
        var msg = chat.mensajes[j];
        contenedor.innerHTML += '<div class="msg-wrapper ' + msg.tipo + '">' +
            '<div class="msg-bubble">' + msg.texto + '</div>' +
        '</div>';
    }
}

// Evento del botón enviar
document.getElementById("btnEnviar").addEventListener("click", function() {
    var input = document.getElementById("inputMensaje");
    if (input.value === "") return;
    contenedor.innerHTML += '<div class="msg-wrapper sent">' +
        '<div class="msg-bubble">' + input.value + '</div>' +
    '</div>';
    input.value = "";
    contenedor.scrollTop = contenedor.scrollHeight;
});