// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component





function Header() {
    let header = document.createElement("div");
    header.classList.add("header");

    let date = document.createElement("span");
    date.textContent = "May 8th, 2020"
    date.classList.add("date");
    header.appendChild(date);

    let title = document.createElement("h1");
    title.textContent = "Lambda Times"
    header.appendChild(title);

    let temp = document.createElement("span");
    temp.textContent = "98°"
    temp.classList.add("temp");
    header.appendChild(temp);

    return header;
}

document.querySelector(".header-container").appendChild(Header());





/*
let headerComponent = document.querySelector('.header-container');


const Header= () => {

// create elements
const header = document.createElement('div');
const date = document.createElement('span');
const title = document.createElement('h1');
const temp = document.createElement('span');

// add classes

header.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');

// add content

date.textContent = 'SMARCH 28, 2019';
title.textContent = 'Lambda Times';
temp.textContent = '98°';


header.appendChild(date);
header.appendChild(title);
header.appendChild(temp);



return header

}

// append header to topComponent and call
// function

headerComponent.appendChild(Header());
*/