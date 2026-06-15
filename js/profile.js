
const fotoPerfil = document.getElementById("profilePhoto");


const botonEditar = document.getElementById("editProfileBtn");
const textoNombre = document.getElementById("nameDisplay");


botonEditar.addEventListener("click", function () {
  const nuevoNombre = prompt("Ingresa tu nuevo nombre");

  if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
    textoNombre.textContent = nuevoNombre;
  }
});

