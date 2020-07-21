// console.log("Hello #426");

// // This is the most important method of the week
// // document.querySelector(CSS_SELECTOR)

// // const players = document.querySelector('#players');
// // const players = document.querySelector('ul');
// // const players = document.querySelector('.list');
// const players = document.querySelector('ul.list#players');
// // const players = document.getElementById('players');
// console.log(players);

// // console log driven development
// // CLDD
// const luke = "<li>Luke</li>";
// players.insertAdjacentHTML("beforeend", luke);
// players.insertAdjacentHTML("beforeend", "<li>Anakin</li>");


const countries = document.querySelectorAll('#fifa-wins > li');
// console.log(countries);

countries.forEach( (country) => {
  // console.log(country);
  // console.log(country.innerText);
});

const ol = document.getElementById('fifa-wins');
// console.log(ol);

// ol.insertAdjacentHTML(POSITION, HTML)
const france = '<li>France (2 wins)</li>';
ol.insertAdjacentHTML('beforeend', france);

ol.classList.add('red');

const input = document.getElementById('email');
// console.log(input.value);

input.value = 'player@one.com';

const link = document.getElementById('home');

// this is for reading
// console.log(link.innerHTML);

// this is for writing
link.innerHTML = "Le Wagon <strong>ROCKS</strong>";

// this is for reading
// console.log(link.innerHTML);

// console.log(link.attributes.href.value);

const andre = document.getElementById('user1');
const vincent = document.getElementById('user2');
// console.log(andre);
// console.log(andre.dataset.favoriteFood);
// console.log(vincent);
// console.log(vincent.dataset.favoriteFood);

// console.log(andre.dataset.uid);
// console.log(andre.dataset.githubNickname);

const romainImg = document.getElementById('romain');
// console.log(romainImg);

// element.addEventListener('EVENT TYPE', BEHAVIOR (anonymous function))

// select all of the images
const images = document.querySelectorAll('img');
// console.log(images);
// for each image
images.forEach((image) => {
  // add an event listener (click)
  // when the click happens
  
  image.addEventListener('click', (event) => {
    // debugger
    // console.log(event);
    // // both of the below are the same
    // console.log(image);
    // console.log(event.currentTarget);

    // toggle the class img-circle
    image.classList.toggle('img-circle');
  });

});
