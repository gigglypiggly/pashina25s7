const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
];
/* Declaring the alternative text for each image file */
const imageDescriptions = [
    'Description for pic1',
    'Description for pic2',
    'Description for pic3',
    'Description for pic4',
    'Description for pic5'
];

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', imageFiles[0]);
newImage.setAttribute('alt', imageDescriptions[0]);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
