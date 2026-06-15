// CUANDO APRETAN EL CORAZON
function darLike(btn) {
  let post = btn.closest(".post");
  let contador = post.querySelector(".contador");
  let corazon = btn.querySelector("path");

  if (corazon.getAttribute("fill") == "red") {
    corazon.setAttribute("fill", "none");
    corazon.setAttribute("stroke", "currentColor");
    contador.textContent = parseInt(contador.textContent) - 1;
  } else {
    corazon.setAttribute("fill", "red");
    corazon.setAttribute("stroke", "red");
    contador.textContent = parseInt(contador.textContent) + 1;
  }
}

function publicarComentario(btn) {
  let input = btn.previousElementSibling;
  let texto = input.value;

  if (texto != "") {
    let post = btn.closest(".post");

    post.querySelector(".comentarios").insertAdjacentHTML(
      "beforeend",
      "<div><strong>tu</strong> " + texto + "</div>"
    );

    input.value = "";
  }
}


