const chats = [

{
    nombre:"Arturo",
    foto:"../img/perfiles/arturo.jpg",

    mensajes:[

        {
            texto:"Hola bro",
            tipo:"received"
        },

        {

            texto:"Hola",

            tipo:"sent"

        }

    ]

},

{

    nombre:"Viajes",

    foto:"../img/perfiles/viajes.jpg",

    mensajes:[

        {

            texto:"Japón es hermoso 🇯🇵",

            tipo:"received"

        }

    ]

}

];



const listaChats=document.getElementById("listaChats");

const contenedor=document.getElementById("contenedorMensajes");

const nombreChat=document.getElementById("nombreChat");

const fotoUsuario=document.getElementById("fotoUsuario");

const header=document.querySelector(".headerChat");

const enviar=document.getElementById("enviarMensajeDiv");



chats.forEach(chat=>{

    listaChats.innerHTML+=`

    <div class="chat">

        <img src="${chat.foto}">

        <div class="textoChat">

            <h4>${chat.nombre}</h4>

            <div class="last-msg">

                ${chat.mensajes[chat.mensajes.length-1].texto}

            </div>

        </div>

    </div>

    `;

});





document.querySelectorAll(".chat").forEach((c,i)=>{

    c.addEventListener("click",()=>{

        abrirChat(i);

    });

});






function abrirChat(i){

    const chat=chats[i];



    document.getElementById("mensajeInicio").style.display="none";



    header.style.display="flex";



    enviar.style.display="flex";



    nombreChat.textContent=chat.nombre;



    fotoUsuario.src=chat.foto;



    contenedor.innerHTML="";



    chat.mensajes.forEach(msg=>{

        contenedor.innerHTML+=`

        <div class="msg-wrapper ${msg.tipo}">

            <div class="msg-bubble">

                ${msg.texto}

            </div>

        </div>

        `;

    });

}






document.getElementById("btnEnviar").addEventListener("click",()=>{

    const input=document.getElementById("inputMensaje");



    if(input.value==="") return;



    contenedor.innerHTML+=`

    <div class="msg-wrapper sent">

        <div class="msg-bubble">

            ${input.value}

        </div>

    </div>

    `;



    input.value="";



    contenedor.scrollTop=contenedor.scrollHeight;

});