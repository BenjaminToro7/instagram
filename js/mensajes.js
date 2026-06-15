// Datos del primer chat (solo uno para empezar)
var chats = [{
    nombre: "Arturo",
    foto: "../img/perfiles/arturo.jpg",
    mensajes: [
        { texto: "Hola bro", tipo: "received" },
        { texto: "Hola", tipo: "sent" }
    ]
}];

// Elementos del HTML
var listaChats = document.getElementById("listaChats");
var contenedor = document.getElementById("contenedorMensajes");
var nombreChat = document.getElementById("nombreChat");
var fotoUsuario = document.getElementById("fotoUsuario");
var header = document.querySelector(".headerChat");
var enviar = document.getElementById("enviarMensajeDiv");
var inputMensaje = document.getElementById("inputMensaje");

// Guardamos qué chat está abierto (el primero al inicio)
var chatActual = 0;

// ----- Mostrar la lista de chats en la barra lateral -----
for (var i = 0; i < chats.length; i++) {
    var chat = chats[i];
    var ultimoMensaje = chat.mensajes[chat.mensajes.length - 1].texto;
    listaChats.innerHTML += '<div class="chat" data-index="' + i + '">' +
        '<img src="' + chat.foto + '">' +
        '<div class="textoChat">' +
            '<h4>' + chat.nombre + '</h4>' +
            '<div class="last-msg">' + ultimoMensaje + '</div>' +
        '</div>' +
    '</div>';
}

// ----- Al hacer clic en un chat, lo abrimos -----
var chatsDiv = document.querySelectorAll(".chat");
for (var i = 0; i < chatsDiv.length; i++) {
    chatsDiv[i].onclick = function() {
        var indice = parseInt(this.getAttribute("data-index"));
        chatActual = indice;  // guardamos cuál está abierto
        abrirChat(indice);
    };
}

// ----- Función que muestra los mensajes de un chat -----
function abrirChat(indice) {
    var chat = chats[indice];
    // Ocultar el mensaje de bienvenida y mostrar el área de chat
    document.getElementById("mensajeInicio").style.display = "none";
    header.style.display = "flex";
    enviar.style.display = "flex";
    // Poner nombre y foto del contacto
    nombreChat.innerText = chat.nombre;
    fotoUsuario.src = chat.foto;
    // Limpiar el área de mensajes y volver a pintarlos
    contenedor.innerHTML = "";
    for (var j = 0; j < chat.mensajes.length; j++) {
        var msg = chat.mensajes[j];
        contenedor.innerHTML += '<div class="msg-wrapper ' + msg.tipo + '">' +
            '<div class="msg-bubble">' + msg.texto + '</div>' +
        '</div>';
    }
}

// ----- Enviar un mensaje nuevo -----
document.getElementById("btnEnviar").onclick = function() {
    var texto = inputMensaje.value;
    if (texto === "") return;  // no enviar vacío
    // Mostrar el mensaje en la pantalla
    contenedor.innerHTML += '<div class="msg-wrapper sent">' +
        '<div class="msg-bubble">' + texto + '</div>' +
    '</div>';
    // Guardar el mensaje en el array del chat actual
    chats[chatActual].mensajes.push({ texto: texto, tipo: "sent" });
    // Limpiar el campo y bajar el scroll
    inputMensaje.value = "";
    contenedor.scrollTop = contenedor.scrollHeight;
};