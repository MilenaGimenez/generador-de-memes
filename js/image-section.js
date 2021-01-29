const url = document.getElementById('url');
const memeImage = document.getElementById('meme-image');

url.addEventListener('keyup', (event) => {
    let value = event.target.value;
    memeImage.style.backgroundColor = 'none'
    memeImage.style.backgroundImage = `url(${value})`
    memeImage.style.backgroundPosition = 'center'
    memeImage.style.backgroundRepeat = 'no-repeat'
    memeImage.style.backgroundSize = 'cover'   
});