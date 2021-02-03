const nav = document.getElementById('nav');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const background = document.getElementById('main');
const imageButton = document.getElementById('image-button');
const textButton = document.getElementById('text-button');
const closeButton = document.getElementById('close-button');
const downloadMeme = document.getElementById('descargar');
const memeSection = document.getElementById('meme-section')

const imageSection = document.getElementById('image-section');
const textSection = document.getElementById('text-section');


textSection.classList.add('display-none');

lightMode.addEventListener('click', () => {    
        document.body.classList.add('light-theme')        
        background.classList.add('light-background')
        lightMode.classList.add('display-none')
        //hasta aca arriba, el boton desaparece

        darkMode.classList.add('display-block')
});

darkMode.addEventListener('click', () => {
    document.body.classList.remove('light-theme')
    background.classList.remove('light-background')
    lightMode.classList.remove('display-none')
    darkMode.classList.remove('display-block')
});

textButton.addEventListener('click', () => {
    imageSection.style.display = 'none'
    textSection.style.display = 'block'
});


imageButton.addEventListener('click', () => {
    imageSection.style.display = 'block'
    textSection.style.display = 'none'
});

closeButton.addEventListener('click', () => {
    textSection.classList.remove('display-none')   
    textSection.style.display= 'none';
    imageSection.style.display= 'none';
});


downloadMeme.addEventListener('click', (e) => {    
    domtoimage.toBlob(memeSection)
    .then(function (blob) {
        window.saveAs(blob, 'mi-meme.png');
    });
    
});