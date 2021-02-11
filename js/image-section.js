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
const backgroundStyle = document.getElementById('background-style');

// Evento URL

url.addEventListener('keyup', (event) => {
    let value = event.target.value;
    memeImage.style.backgroundColor = 'none'
    memeImage.style.backgroundImage = `url(${value})`
    memeImage.style.backgroundPosition = 'center'
    memeImage.style.backgroundRepeat = 'no-repeat'
    memeImage.style.backgroundSize = 'cover'   
});

// Evento color al background

backgroundColorImg.addEventListener('input', (event) => {
    let value = event.target.value;    
    memeImage.style.backgroundColor = `${value}`
    backgroundTextImg.innerHTML = value.toUpperCase()    
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


// Filtros

const filtrosImagen = () =>{
    memeImage.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturation.value}%) invert(${invert.value})`;
};

brightness.addEventListener('change', filtrosImagen);
opacity.addEventListener('change', filtrosImagen);
contrast.addEventListener('change', filtrosImagen);
blur.addEventListener('change', filtrosImagen);
grayscale.addEventListener('change', filtrosImagen);
sepia.addEventListener('change', filtrosImagen);
hue.addEventListener('change', filtrosImagen);
saturation.addEventListener('change', filtrosImagen);
invert.addEventListener('change', filtrosImagen);

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

    filtrosImagen()
 });

 
 // Filtros mezcla
 backgroundStyle.addEventListener('change', (event) => {
     let value = event.target.value;
     memeImage.style.backgroundBlendMode = event.target.value;
 })