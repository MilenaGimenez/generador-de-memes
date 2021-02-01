const url = document.getElementById('url');
const memeImage = document.getElementById('meme-image');
const backgroundColorImg = document.getElementById('background-color-img');
const backgroundTextImg = document.getElementById('background-text-img');
const brightness = document.getElementById('brightness');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const blur = document.getElementById('blur');
const grayscale = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue-rotation');
const saturation = document.getElementById('saturation');
const invert = document.getElementById('invert');
const resetButton = document.getElementById('reset-button');

url.addEventListener('keyup', (event) => {
    let value = event.target.value;
    memeImage.style.backgroundColor = 'none'
    memeImage.style.backgroundImage = `url(${value})`
    memeImage.style.backgroundPosition = 'center'
    memeImage.style.backgroundRepeat = 'no-repeat'
    memeImage.style.backgroundSize = 'cover'   
});

backgroundColorImg.addEventListener('input', (event) => {
    let value = event.target.value;    
    memeImage.style.backgroundColor = `${value}`
    backgroundTextImg.innerHTML = value.toUpperCase()    
});

// Filtros

brightness.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `brightness(${value})`;
});

opacity.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `opacity(${value})`;
});

contrast.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `contrast(${value}%)`;
});

blur.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `blur(${value}px)`;
});

grayscale.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `grayscale(${value}%)`;
});

sepia.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `sepia(${value}%)`;
});

hue.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `hue-rotate(${value}deg)`;
});

saturation.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `saturate(${value}%)`;   
});

invert.addEventListener('change', (event) => {
    let value = event.target.value    
    memeImage.style.filter = `invert(${value})`;
});

//Botón reset filtros
resetButton.addEventListener('click', () => {   
   brightness.value = 1;
   opacity.value = 1;
   contrast.value = 100;
   blur.value = 0;
   grayscale.value = 0;
   sepia.value = 0;
   hue.value = 0;
   saturation.value = 100;
   invert.value = 0;
});