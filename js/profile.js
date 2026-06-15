// ================================================================
// FOTO DE PERFIL
// ================================================================

// 1. Seleccionar el elemento de la foto de perfil usando su ID
const fotoPerfil = document.getElementById("fotoPerfil");

// 2. Agregar un evento "click" a la foto de perfil
fotoPerfil.addEventListener("click", function() {
  // 3. Mostrar una alerta cuando el usuario haga clic en la foto
  alert("Perfil abierto");
});

// ================================================================
// EDITAR PERFIL
// ================================================================

// 1. Seleccionar el botón "Editar perfil" usando su ID
const btnEditar = document.getElementById("btnEditarPerfil");

// 2. Seleccionar el elemento donde se muestra el nombre completo
const nombreCompleto = document.getElementById("nombreCompleto");

// 3. Agregar un evento "click" al botón
btnEditar.addEventListener("click", function() {
  // 4. Pedir al usuario que ingrese un nuevo nombre usando prompt()
  const nuevoNombre = prompt("Ingresa tu nuevo nombre", nombreCompleto.textContent);

  // 5. Si el usuario no canceló el prompt y escribió algo, actualizar el nombre
  if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
    nombreCompleto.textContent = nuevoNombre.trim();
  }
});

// ================================================================
// HISTORIAS DESTACADAS
// ================================================================

// 1. Seleccionar TODOS los elementos que tienen la clase "historia-item"
const historias = document.querySelectorAll(".historia-item");

// 2. Recorrer cada historia usando un bucle simple
for (let i = 0; i < historias.length; i++) {
  const historia = historias[i];

  // 3. Agregar un evento "click" a cada historia
  historia.addEventListener("click", function() {
    // 4. Mostrar una alerta indicando que se abre la historia
    alert("Abriendo historia destacada...");
  });
}
