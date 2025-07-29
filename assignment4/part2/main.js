const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg'
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
for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFiles[i]);
    newImage.setAttribute('alt', imageDescriptions[i]);
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', imageFiles[i]);
        displayedImage.setAttribute('alt', imageDescriptions[i]);
    });
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

