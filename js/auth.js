let user_auth = "i";

var formAuth = document.getElementById("form_auth");
var submit = document.getElementById("submit");
var inputUser = document.getElementById("user");
var subtitle = document.getElementById("subtitle");
var title = document.getElementById("title");
var body = document.getElementById("body");
var blur = document.getElementById("blur");
var loading = document.getElementById("loading");

inputUser.addEventListener("focus", function() {
  subtitle.style.left = "-2000px";
  title.style.maxWidth = "90%";
})

blur.addEventListener("click", function() {
  subtitle.style.left = "20px";
  title.style.maxWidth = "60%";
})

submit.addEventListener("click", function() {
  var user = document.querySelector('[name=user]').value;
  var password = document.querySelector('[name=password]').value;

  var login = user+password
  if (login == user_auth) {
    loading.style.left = "0"
    var timer = setTimeout(function() {
      document.querySelector('#page').style.display = "flex";
      document.querySelector('#login').style.display = "none";
      loading.style.left = "-1000px"
    }, 3000);
  } else {
    window.alert("Usuario não encontrado");
  }
})