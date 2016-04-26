'use-strict';

function h1Selector() {
  return $('h1')
}

function liInOlSelector() {
  //return li inside ol using descendant
  return $('ol li')
}

function linkSelector() {
  //return a inside element with BOTH #box4 & .box5
  return $('#box4.box5 a')
}

function imageSelector() {
  //img[alt='cat sleeping']
  return $("img[alt='cat sleeping']")
}

function checkboxInputSelector(){
  //checkbox inputs
  return $('input:checked')

}
