const nav = document.getElementById('nav');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const background = document.getElementById('main');
const imageButton = document.getElementById('image-button');
const textButton = document.getElementById('text-button');
const closeButtonImage = document.getElementById('close-button-image');
const closeButtonText = document.getElementById('close-button-text');
const downloadMeme = document.getElementById('descargar');
const memeSection = document.getElementById('meme-section')

const imageSection = document.getElementById('image-section');
const textSection = document.getElementById('text-section');


// Modos claro y oscuro
lightMode.addEventListener('click', () => {    
        document.body.classList.add('light-theme')        
        background.classList.add('light-background')
        lightMode.classList.add('display-none')
        darkMode.classList.add('display-block')
});

darkMode.addEventListener('click', () => {
    document.body.classList.remove('light-theme')
    background.classList.remove('light-background')
    lightMode.classList.remove('display-none')
    darkMode.classList.remove('display-block')
});


// Botón show sección texto y sección imagen 
textButton.addEventListener('click', () => {    
    imageSection.style.display = 'none'
    textSection.style.display = 'block'
    textSection.style.right = '0px'    
});

imageButton.addEventListener('click', () => {    
    imageSection.style.display = 'block'
    textSection.style.display = 'none'    
});

// Botón hidden sección texto y sección imagen
closeButtonImage.addEventListener('click', () => {  
    imageSection.style.display= 'none';
});

closeButtonText.addEventListener('click', () => {     
    textSection.style.display= 'none';
});


// Botón descarga del meme
downloadMeme.addEventListener('click', (e) => {    
    domtoimage.toBlob(memeSection)
    .then(function (blob) {
        window.saveAs(blob, 'mi-meme.png');
    });    
});

// Responsive de las secciones
if(window.innerWidth > 1300){
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 1300){
            imageSection.style.display = 'block';
        } else {
            imageSection.style.display ='none';            
        };
    });
};