'use-strict';

function h1Selector() {
  var allH1 = $('h1');
  return allH1; 
}


function liInOlSelector() {
  var allLiOls = $('ol li');
  return allLiOls;
}

function linkSelector() {
  var selectedLinks = $('#box4.box5 a');
  return selectedLinks;
}

function imageSelector() {
  var kitty = $("img[alt='cat sleeping']");
  return kitty;
}

function checkboxInputSelector() {
  var checks = $("input[type='checkbox']");
  return checks;
}