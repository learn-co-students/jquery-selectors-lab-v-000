'use-strict';

function h1Selector() {
  return $("h1")
}

function liInOlSelector() {
  return $("ol li")
}

function linkSelector() {
  return $("#box4.box5 a")
}

function imageSelector() {
  return $("img[alt='cat sleeping']")
}

function checkboxInputSelector() {
  return $(":input:checked")
}


//Write a function, linkSelector, that selects and returns the <a> that is inside of the element that has both an id of box4 and a class of box5.
//Write a function, imageSelector, that selects and returns the image of the cat that has the alt text equal to "cat sleeping".
//Write a function, checkboxInputSelector, that selects and returns all the checkbox inputs
