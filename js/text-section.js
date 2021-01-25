const memeTopText = document.getElementById('meme-top-text');
const memeImage = document.getElementById('meme-image');
const memeBottomText = document.getElementById('meme-bottom-text');
const fontColorText = document.getElementById('font-color-text');


const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const topTextCheck = document.getElementById('top-text-check');
const bottomTextCheck = document.getElementById('bottom-text-check');

const fontOption = document.getElementById('font');
const fontSize = document.getElementById('input-size');
const leftAlign = document.getElementById('left-align');
const fontColor = document.getElementById('font-color');
const fontBackgroundColor = document.getElementById('font-color-background');

// Evento para que se escriba el top text en la imagen
topText.addEventListener('keyup', () => {    
    memeTopText.innerHTML = topText.value;    
});

// Evento para que se escriba el buttom text en la imagen
bottomText.addEventListener('keyup', () => {
  memeBottomText.innerHTML = bottomText.value;
});

// Evento para que se elimine la caja de top-text y de bottom-text
topTextCheck.addEventListener('click',() => {
  if(topTextCheck.checked){    
    memeTopText.style.display = 'none'
  } else {    
    memeTopText.style.display = 'block'
  };
});

bottomTextCheck.addEventListener('click',() => {
  if(bottomTextCheck.checked){    
    memeBottomText.style.display = 'none'
  } else {    
    memeBottomText.style.display = 'block'
  };
});

// Evento para cambiar la fuente en el select
fontOption.addEventListener('change', () => {
  memeTopText.style.fontFamily = `${fontOption.value}`;
  memeBottomText.style.fontFamily = `${fontOption.value}`;
});

// Evento para cambiar el tamaño de la fuente
fontSize.addEventListener('change', () => {
  memeTopText.style.fontSize = `${fontSize.value}px`
  memeBottomText.style.fontSize = `${fontSize.value}px`
});

// Evento para cambiar el alineado del texto                              no anda
/* leftAlign.addEventListener('click', (event) => {
  event.preventDefault();  
  memeTopText.style.textAlign = 'left';
  memeBottomText.style.textAlign = 'left';
  console.log(leftAlign.event)
}); */

// Evento color de la fuente
fontColor.addEventListener('input', (event) =>{
  const color = event.target.value;
  memeTopText.style.color = color;
  memeBottomText.style.color = color;
  fontColorText.innerHTML = color.toUpperCase();
});

// Evento color del fondo
/* fontBackgroundColor.addEventListener('input', (event) => {
  const color = event.target.value;
  memeTopText.style.backgroundColor = color;
}); */