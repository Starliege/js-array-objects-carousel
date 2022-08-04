// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice che trovate allegato,
// Bisogna generare il murkup delle slide ciclando l’array di oggetti che trovare nel file js.
// Il murkup da generare invece lo potrete trovare nel file html.
// A parte la generezione del murkup, il resto della logica è la stessa del vecchio esercizio,
// Se posso darvi un consiglio, a volte è più facile rifare le cose da capo invece che fare copia e incolla a raffica (che potrebbero portarvi a fare enormi pasticci).

// console.log('slider')
const slides = [
	{
		url: 'img/01.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'img/02.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'img/03.jpg',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'img/04.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'img/05.jpg',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

const slidesRef = document.getElementsByClassName('slides')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];
let slide = '';
let thumb = '';
let active = 1;

for (let key in slides) {
    slide += `
        <div class="slide">
            <img src="${slides[key].url}" alt="">
            <div class="text">
                <h3>${slides[key].title}</h3>
                <p>${slides[key].description}</p>
            </div>
        </div>`
    thumb += `
        <div class="thumb">
            <img src="${slides[key].url}" alt="">
        </div>
    `
}

slidesRef.innerHTML = slide;
document.getElementsByClassName('slide')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {                                                                   
        active = slides.length - 1; 

        document.querySelector('.slide.active').classList.remove('active');
        document.getElementsByClassName('slide')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < slides.length) {
        --active
        document.querySelector('.slide.active').classList.remove('active');
        document.getElementsByClassName('slide')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } 
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < slides.length - 1) {
        ++active
        document.querySelector('.slide.active').classList.remove('active');
        document.getElementsByClassName('slide')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == slides.length - 1) { 
        active = 0;
        document.querySelector('.slide.active').classList.remove('active');
        document.getElementsByClassName('slide')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});