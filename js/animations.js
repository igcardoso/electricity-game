
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 70 * i);
  });
}

const titulo = document.querySelector('.automatic_typing');
typeWriter(titulo);
