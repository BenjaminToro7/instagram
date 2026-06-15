/* =============================================================
   FOTO DE PERFIL - Muestra alerta al hacer clic
   ============================================================= */

// Obtenemos el elemento de la foto de perfil por su ID
const fotoPerfil = document.getElementById("profilePhoto");

// Cuando el usuario hace clic en la foto, mostramos una alerta
fotoPerfil.addEventListener("click", function () {
  alert("Perfil abierto");
});

/* =============================================================
   EDITAR PERFIL - Permite cambiar el nombre con un prompt
   ============================================================= */

// Obtenemos el boton "Editar perfil" y el texto del nombre
const botonEditar = document.getElementById("editProfileBtn");
const textoNombre = document.getElementById("nameDisplay");

// Cuando el usuario hace clic en "Editar perfil", preguntamos el nuevo nombre
botonEditar.addEventListener("click", function () {
  // Mostramos un cuadro de dialogo para que el usuario escriba
  const nuevoNombre = prompt("Ingresa tu nuevo nombre");

  // Si el usuario escribio algo (no cancelo ni dejo vacio), lo actualizamos
  if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
    textoNombre.textContent = nuevoNombre;
  }
});

/* =============================================================
   HISTORIAS DESTACADAS - Muestra alerta al hacer clic
   ============================================================= */

// Obtenemos todas las historias destacadas por su ID
const historia1 = document.getElementById("story1");
const historia2 = document.getElementById("story2");
const historia3 = document.getElementById("story3");
const historia4 = document.getElementById("story4");

// Funcion que se ejecuta al hacer clic en cualquier historia
function abrirHistoria() {
  alert("Abriendo historia destacada...");
}

// Asignamos la funcion a cada historia destacada
historia1.addEventListener("click", abrirHistoria);
historia2.addEventListener("click", abrirHistoria);
historia3.addEventListener("click", abrirHistoria);
historia4.addEventListener("click", abrirHistoria);
