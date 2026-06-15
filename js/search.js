// USUARIOS DE EJEMPLO
const usuarios = [
  { nombre: 'matemagia', descripcion: 'Matematicas y magia', foto: '../img/perfiles/matemagia.jpg' },
  { nombre: 'm30m', descripcion: 'Streamer y creador de contenido', foto: '../imagenes/m30m.jpg' },
  { nombre: 'arturo', descripcion: 'Musica y motivacion', foto: '../img/perfiles/arturo.jpg' },
  { nombre: 'viajes', descripcion: 'Explorando el mundo', foto: '../img/perfiles/viajes.jpg' },
  { nombre: 'starsmusic', descripcion: 'Musica sin limites', foto: '../img/perfiles/starsmusic.jpg' },
  { nombre: 'usuario_demo', descripcion: 'Desarrollador Web', foto: '../imagenes/matemagia.png' }
];

// REFERENCIA AL CONTENEDOR Y AL INPUT
const userList = document.getElementById('userList');
const searchInput = document.getElementById('searchInput');

// FUNCION PARA MOSTRAR USUARIOS EN PANTALLA
function mostrarUsuarios(lista) {
  // LIMPIAMOS EL CONTENEDOR
  userList.innerHTML = '';

  // SI NO HAY RESULTADOS, MOSTRAMOS MENSAJE
  if (lista.length === 0) {
    let mensaje = document.createElement('p');
    mensaje.className = 'no-results';
    mensaje.textContent = 'No se encontraron usuarios';
    userList.appendChild(mensaje);
    return;
  }

  // RECORREMOS LA LISTA Y CREAMOS CADA TARJETA
  for (let i = 0; i < lista.length; i++) {
    let usuario = lista[i];

    let fila = document.createElement('div');
    fila.className = 'user-row';

    let img = document.createElement('img');
    img.className = 'user-avatar';
    img.src = usuario.foto;
    img.alt = usuario.nombre;

    let info = document.createElement('div');
    info.className = 'user-info';

    let nombre = document.createElement('p');
    nombre.className = 'user-name';
    nombre.textContent = usuario.nombre;

    let desc = document.createElement('p');
    desc.className = 'user-desc';
    desc.textContent = usuario.descripcion;

    info.appendChild(nombre);
    info.appendChild(desc);
    fila.appendChild(img);
    fila.appendChild(info);
    userList.appendChild(fila);
  }
}

// FILTRO EN TIEMPO REAL MIENTRAS ESCRIBEN
searchInput.addEventListener('input', function() {
  let texto = searchInput.value.toLowerCase();
  let filtrados = [];

  for (let i = 0; i < usuarios.length; i++) {
    let nombre = usuarios[i].nombre.toLowerCase();
    if (nombre.includes(texto)) {
      filtrados.push(usuarios[i]);
    }
  }

  mostrarUsuarios(filtrados);
});

// MOSTRAMOS TODOS LOS USUARIOS AL INICIO
mostrarUsuarios(usuarios);
