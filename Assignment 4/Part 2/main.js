// Name: Milan Anil Anthore
// File: main.js
// Date: 20 March 2024
// A programme which generates image gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const altTexts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'A weird but beautiful image with lots of curvy lines',
    'pic3.jpg': 'Lots of white and blue flowers',
    'pic4.jpg': 'A image showing old egyptian painting',
    'pic5.jpg': 'Picture of a butterfly'
  };

/* Looping through images */

imageFilenames.forEach(imgFilename => {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/'+imgFilename);
newImage.setAttribute('alt', altTexts[imgFilename]);
thumbBar.appendChild(newImage);

  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', 'images/' + imgFilename);
    displayedImage.setAttribute('alt', altTexts[imgFilename]);
  });
});


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0, 0, 0, 50%)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0, 0, 0, 0%)';
    }
  });


