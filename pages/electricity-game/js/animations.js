function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 70 * i);
  });
}

const titulo = document.querySelector('.automatic_typing');
typeWriter(titulo);


var IPTV_TV = document.querySelector("#IPTV_TV")
var IPTV_MOBILE = document.querySelector("#IPTV_MOBILE")
var FILMS_TV = document.querySelector("#FILMS_TV")
var FILMS_MOBILE = document.querySelector("#FILMS_MOBILE")

IPTV_TV.addEventListener("click", ()=> {
  IPTV_TV.style.transform = "scale(1000.1)";
  setTimeout(function() {
    window.location.href = "IPTV_TV.apk";
    document.querySelector('#page').style.display = "none";
  }, 600);
})
IPTV_MOBILE.addEventListener("click", ()=> {
  IPTV_MOBILE.style.transform = "scale(1000.1)";
  setTimeout(function() {
    window.location.href = "IPTV_MOBILE.apk";
    document.querySelector('#page').style.display = "none";
  }, 600);

})
FILMS_TV.addEventListener("click", ()=> {
  FILMS_TV.style.transform = "scale(1000.1)";
  setTimeout(function() {
    window.location.href = "https://app.youcine.vip/app/cinetv_oficialsite.apk";
    document.querySelector('#page').style.display = "none";
  }, 600);
})
FILMS_MOBILE.addEventListener("click", ()=> {
  FILMS_MOBILE.style.transform = "scale(1000.1)";
  setTimeout(function() {
    window.location.href = "https://app.youcine.vip/app/signyoucinemobile_oficialsite.apk";
    document.querySelector('#page').style.display = "none";
  }, 600);
})