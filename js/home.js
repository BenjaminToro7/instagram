const users = [
  { nombre: "Tu historia", img: "https://i.pravatar.cc/60?img=1" },
  { nombre: "ana_", img: "https://i.pravatar.cc/60?img=2" },
  { nombre: "carlos", img: "https://i.pravatar.cc/60?img=3" },
  { nombre: "maria", img: "https://i.pravatar.cc/60?img=4" },
  { nombre: "jose", img: "https://i.pravatar.cc/60?img=5" },
  { nombre: "laura", img: "https://i.pravatar.cc/60?img=6" },
  { nombre: "pedro", img: "https://i.pravatar.cc/60?img=7" },
  { nombre: "sofia", img: "https://i.pravatar.cc/60?img=8" },
];

const posts = [
  { user: "ana_", avatar: "https://i.pravatar.cc/60?img=2", img: "https://picsum.photos/seed/p1/600/600", likes: 1234, texto: "Amanecer en la playa" },
  { user: "carlos", avatar: "https://i.pravatar.cc/60?img=3", img: "https://picsum.photos/seed/p2/600/600", likes: 567, texto: "Nueva aventura" },
  { user: "maria", avatar: "https://i.pravatar.cc/60?img=4", img: "https://picsum.photos/seed/p3/600/600", likes: 2341, texto: "Café y libros" },
  { user: "jose", avatar: "https://i.pravatar.cc/60?img=5", img: "https://picsum.photos/seed/p4/600/600", likes: 892, texto: "Atardecer en la montaña" },
];

let s = "";
for (let u of users) {
  s += '<div class="story"><div class="story-img"><img src="' + u.img + '"></div><p>' + u.nombre + '</p></div>';
}
document.getElementById("stories").innerHTML = s;

let f = "";
for (let p of posts) {
  let coment = Math.floor(Math.random() * 30 + 3);
  f += '<div class="post">'
    + '<div class="post-cabeza"><img src="' + p.avatar + '"><span class="post-user">' + p.user + '</span><span>⋯</span></div>'
    + '<img class="post-foto" src="' + p.img + '">'
    + '<div class="post-botones">'
      + '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
      + '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M21 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      + '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/></svg>'
      + '<svg class="guardar" viewBox="0 0 24 24" width="22" height="22"><path d="M17 3H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
    + '</div>'
    + '<div class="post-likes">' + p.likes.toLocaleString() + ' likes</div>'
    + '<div class="post-texto"><strong>' + p.user + '</strong> ' + p.texto + '</div>'
    + '<div class="post-comments">Ver los ' + coment + ' comentarios</div>'
    + '<div class="post-tiempo">HACE ' + p.likes % 60 + ' MINUTOS</div>'
    + '</div>';
}
document.getElementById("feed").innerHTML = f;
