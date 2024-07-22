const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

function changeImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(changeImage, 2500);

var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".card button");
var span = document.getElementsByClassName("close")[0];

btns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelector(".modal-form").onsubmit = function (e) {
  e.preventDefault();
  alert("Podaci su uspešno poslati!");
  modal.style.display = "none";
};
