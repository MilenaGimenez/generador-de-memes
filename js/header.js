const nav = document.getElementById('nav');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const background = document.getElementById('main');

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