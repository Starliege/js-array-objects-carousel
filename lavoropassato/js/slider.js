// console.log('slider')

const imgArr = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const titleArr = [
  '1',
  '2',
  '3',
  '4',
  '5'
];

const textArr = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Definiamo variabili
let mainImage = document.getElementById("slideshow");
let active = 0; // Puntatore

// For per aggiungere le immagini
for (let i = 0; i < imgArr.length; i++) {
  mainImage.innerHTML += `
  <div class="content hidden" id="item-${i}">
    <div class="text">
      <h2>${titleArr[i]}</h2>
      <p>${textArr[i]}</p>
    </div>
    <img src="${imgArr[i]}" alt="">
  </div>
  `
}

// Immagini attive
let mainImageActive = document.getElementById("item-" + active);

mainImageActive.classList.add("active");


// Frecce
let prev = document.getElementById("arrow-up");
let next = document.getElementById("arrow-down");

prev.addEventListener("click", prevFunc);
next.addEventListener("click", nextFunc);

function prevFunc() {
  active--;
  if (active < 0) {
    active = 4;
  }
  mainImageActive.classList.remove("active");

  mainImageActive = document.getElementById("item-" + active);
  mainImageActive.classList.add("active");

}

function nextFunc() {
  active++;
  if (active > 4) {
    active = 0;
  }
  mainImageActive.classList.remove("active");
  mainImageActive = document.getElementById("item-" + active);
  mainImageActive.classList.add("active");

}