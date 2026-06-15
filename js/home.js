// CUANDO APRETAN EL CORAZON DE ABAJO, ESTA FUNCION SE DISPARA
function darLike(btn) {
  // BUSCAMOS EL PATH DENTRO DEL SVG PA CAMBIARLE EL COLOR
  let path = btn.querySelector("path");
  // SUBIMOS AL POST COMPLETO
  let post = btn.closest(".post");
  // BUSCAMOS EL CONTADOR DE LIKES
  let contador = post.querySelector(".contador");
  // SACAMOS EL NUMERO ACTUAL
  let likes = parseInt(contador.textContent);

  // SI YA ESTA ROJO, LE SACAMOS EL LIKE
  if (path.getAttribute("fill") === "red") {
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    contador.textContent = likes - 1;
  } else {
    // SI NO, LO PONEMOS ROJO Y SUMAMOS UNO
    path.setAttribute("fill", "red");
    path.setAttribute("stroke", "red");
    contador.textContent = likes + 1;
  }
}

// CUANDO HACEN DOBLE CLIC EN LA FOTO
function darLikeFoto(wrap) {
  // BUSCAMOS EL POST Y EL BOTON DE LIKE
  let post = wrap.closest(".post");
  let btn = post.querySelector(".like-btn");
  let path = btn.querySelector("path");
  let contador = post.querySelector(".contador");
  let likes = parseInt(contador.textContent);

  // SI NO TIENE LIKE, SE LO PONEMOS
  if (path.getAttribute("fill") !== "red") {
    path.setAttribute("fill", "red");
    path.setAttribute("stroke", "red");
    contador.textContent = likes + 1;
  }

  // MOSTRAMOS EL CORAZON BLANCO EN EL MEDIO
  let anim = wrap.querySelector(".heart-anim");
  anim.innerHTML = '<svg viewBox="0 0 24 24" width="80" height="80"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke="white" stroke-width="1"/></svg>';
  // REINICIAMOS LA ANIMACION
  anim.classList.remove("mostrar");
  void anim.offsetWidth;
  anim.classList.add("mostrar");
}
