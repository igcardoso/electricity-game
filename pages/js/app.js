var defeat = new Audio('defeat.mp3');
function startTimer(duration, display) {
  var timer = duration,
  minutes,
  seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
  },
    1000);
}
window.onload = function () {
  
    setTimeout(() => {
      document.querySelector("#alert").style.display = "block";
       defeat.play();
       
       setTimeout(() => {
         window.location.href = "./index.html"
       }, 10000);
    }, 62000);

  var duration = 60 * 1; // Converter para segundos
  display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration,
    display); // iniciando o timer
};