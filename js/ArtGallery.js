const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['Summer Days, Drifting Away.png', `NadyeRaffleNoTwitHandle.png`, `GET_A_MEDIC.png`, `BirdLass.png`, `RenderVroid.png`];
const alts = {
  'Summer Days, Drifting Away.png' : "An art piece I made for the Autism Society of Inland Empire's 2023 calendar",
  'NadyeRaffleNoTwitHandle.png' : 'A character artwork I made for someone in 2022',
  'GET_A_MEDIC.png' : "A sketch from early April 2023 of a friend's cartoony character",
  'BirdLass.png' : 'A concept art of a medieval fantasy character I made in 2022',
  'RenderVroid.png' : 'A render of a model I created'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
