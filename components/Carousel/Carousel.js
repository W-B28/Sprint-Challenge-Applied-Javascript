/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
/* TO DO LIST:
  1. grab HTML carousel element
  2. create a function that builds the above DOM tree
*/

// First select the div where to inject js.
const carousel = document.querySelector('.carousel-container')

function createCarousel() {


  // Create element & add class
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')

  // Create button elements, add class, and content 
  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = '<'

  // Create image elements from above example 
  const mountainImg = document.createElement('img')
  const computerImg = document.createElement('img')
  const treesImg = document.createElement('img')
  const turntableImg = document.createElement('img')

  // add sources to images
  mountainImg.src = "./assets/carousel/mountains.jpeg"
  computerImg.src = "./assets/carousel/computer.jpeg"
  treeImg.src = "./assets/carousel/trees.jpeg"
  turntableImg.src = "./assets/carousel/turntable.jpeg"


  // Create button elements, add class, and content 
  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = '>'

  // append items to DOM
  carousel.appendChild(leftButton);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treeImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightButton);


return carousel;
}

createCarousel()