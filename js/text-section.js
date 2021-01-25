const memeTopText = document.getElementById('meme-top-text');
const memeImage = document.getElementById('meme-image');
const memeBottomText = document.getElementById('meme-bottom-text');
const fontColorText = document.getElementById('font-color-text');
const fontBackgroundText = document.getElementById('font-background-text');



const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const topTextCheck = document.getElementById('top-text-check');
const bottomTextCheck = document.getElementById('bottom-text-check');

const fontOption = document.getElementById('font');
const fontSize = document.getElementById('input-size');
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');
const whiteOutline = document.getElementById('white-outline');
const blackOutline = document.getElementById('black-outline');
const noneOutline = document.getElementById('none-outline');
const fontColor = document.getElementById('font-color');
const fontBackgroundColor = document.getElementById('background-color');
const backgroundNone = document.getElementById('background-none');
const spacingText = document.getElementById('font-spacing');
const lineSpacing = document.getElementById('line-spacing');

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

// Evento para cambiar el alineado del texto a izquierda, centro y derecha
leftAlign.addEventListener('click', (event) => {
  event.preventDefault();  
  memeTopText.style.textAlign = 'left';
  memeBottomText.style.textAlign = 'left';  
});

centerAlign.addEventListener('click', (event) => {
  event.preventDefault();  
  memeTopText.style.textAlign = 'center';
  memeBottomText.style.textAlign = 'center';  
});

rightAlign.addEventListener('click', (event) => {
  event.preventDefault();  
  memeTopText.style.textAlign = 'right';
  memeBottomText.style.textAlign = 'right';  
});

// Evento color de la fuente
fontColor.addEventListener('input', (event) =>{
  const color = event.target.value;
  memeTopText.style.color = color;
  memeBottomText.style.color = color;
  fontColorText.innerHTML = color.toUpperCase();
});

// Evento color del fondo               no anda
/* fontBackgroundColor.addEventListener('input', (event) => {
  const color2 = event.target.value;
  memeTopText.style.backgroundColor = color2;
  memeBottomText.style.backgroundColor = color2;
  fontBackgroundText.innerHTML = color2.toUpperCase();
}); */

// Evento fondo transparente
backgroundNone.addEventListener('click', (event) => {
  if(event.target.checked){
    memeTopText.style.backgroundColor = 'transparent'
    memeBottomText.style.backgroundColor = 'transparent'
    memeImage.style.height = '100%'
  }
});

// Evento contorno de las letras
whiteOutline.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.webkitTextStroke = '1px white';
  memeBottomText.style.webkitTextStroke = '1px white';
});

blackOutline.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.webkitTextStroke = '1px black';
  memeBottomText.style.webkitTextStroke = '1px black';
});

noneOutline.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.webkitTextStroke = 'transparent';
  memeBottomText.style.webkitTextStroke = 'transparent';
});

// Evento espaciado entre carácteres
spacingText.addEventListener('input', (event) => {
  let spacing = event.target.value
  memeTopText.style.letterSpacing = `${spacing}px`
  memeBottomText.style.letterSpacing = `${spacing}px`
});

// Evento interlineado
lineSpacing.addEventListener('change', (event) => {
  let lineValue = event.target.value
  memeTopText.style.lineHeight = lineValue;
  memeBottomText.style.lineHeight = lineValue;
});
