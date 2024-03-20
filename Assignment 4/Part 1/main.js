
// Name: Milan Anil Anthore
// File: main.js
// Date: 20 March 2024
// A programme which generates silly stories.


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}