let btnRedes = document.getElementsByClassName("icone-redes");

let balaoRedes = document.getElementsByClassName("balao");

let icone = document.getElementsByClassName("icone-redes");

btnRedes[0].addEventListener("click", function () {
  balaoRedes[0].classList.toggle("active");
  icone[0].classList.toggle("icon-active");
});
