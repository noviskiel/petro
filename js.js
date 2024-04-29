const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const button = document.querySelector('.container')

button.addEventListener('click', () => {
  sun.classList.toggle('visible')
  moon.classList.toggle('visible')
})

// sun.addEventListener('click', () => {
//   sun.classList.toggle('visible')
//   moon.classList.toggle('visible')
// })

// moon.addEventListener('click', () => {
//   sun.classList.toggle('visible')
//   moon.classList.toggle('visible')
// })

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function modalFecha(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function modalAbre(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
