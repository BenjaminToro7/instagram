// BOTON CERRAR
document.getElementById("closeBtn").onclick = () => alert("Cerrado");

// BOTONES SEGUIR
document.querySelectorAll(".follow-btn").forEach(btn => {
  btn.onclick = function() { this.textContent = "Siguiendo"; this.classList.add("following"); };
});
