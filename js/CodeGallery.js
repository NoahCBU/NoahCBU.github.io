const displayedCode = document.querySelector('.displayed-code');
const codeThumbBar = document.querySelector('.code-thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const codes = ['img1.png', `img2.png`, `img3.png`, `img4.png`, `img5.jpg`];
const alts = {
  'img1.png' : "Code 1",
  'img2.png' : 'Code 2',
  'img3.png' : "Code 3",
  'img4.png' : 'Code 4',
  'img5.jpg' : 'Code 5'
}

/* Looping through images */

for (const image of codes) {
  const newCode = document.createElement('img');
  newCode.setAttribute('src', `images/${image}`);
  newCode.setAttribute('alt', alts[image]);
  codeThumbBar.appendChild(newCode);
  newCode.addEventListener('click', e => {
    displayedCode.src = e.target.src;
    displayedCode.alt = e.target.alt;
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
