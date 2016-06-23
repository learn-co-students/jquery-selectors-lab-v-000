'use-strict';

//Done

function h1Selector() {
  return $('h1');
}

function liInOlSelector() {
  return $('ol li');
}

function linkSelector() {
  //both work
  //return $("div[id='box4'][class='box5'] a");
  return $('div#box4.box5 a');
}

function imageSelector() {
  return $("img[alt='cat sleeping']");
}

// function checkboxInputSelector() {
//   return $("input[type='checkbox']");
// };

function checkboxInputSelector() {
  return $(':checkbox');
}
