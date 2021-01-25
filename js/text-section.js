const memeTopText = document.getElementById('meme-top-text');
const memeImage = document.getElementById('meme-image');
const memeBottomText = document.getElementById('meme-bottom-text');


const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const topTextCheck = document.getElementById('top-text-check');

const fontOption = document.getElementById('font');

// Evento para que se escriba el top text en la imagen
topText.addEventListener('keyup', () => {    
    memeTopText.innerHTML = topText.value;    
});

// Evento para que se escriba el buttom text en la imagen
bottomText.addEventListener('keyup', () => {
  memeBottomText.innerHTML = bottomText.value;
});

// Evento para que se elimine la caja de top-text
/* topTextCheck.addEventListener('click', (event) => { 
  memeTopText.style.display = 'none'
}) */

// Evento para cambiar la fuente en el select
fontOption.addEventListener('change', () => {
  memeTopText.style.fontFamily = `${fontOption.value}`;
  memeBottomText.style.fontFamily = `${fontOption.value}`;
})