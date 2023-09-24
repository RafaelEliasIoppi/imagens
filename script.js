const images = ['1920.png', '1930.png', '1940.png', '1950.png','1960.png',
'1970.png', '1980.png', '1990.png', '2000.png', '2010.png','2020.png',
 'aimore.png', 'Ypiranga.png', 'inter.png', 'Juventude.png'];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function loadImage() {
    const imageContainer = document.getElementById('image-container');
    const image = document.createElement('img');
    image.src = getRandomImage();
    image.classList.add('image');
    imageContainer.appendChild(image);
}

function loadImagesOnScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Você está no final da página, carregue mais imagens
        loadImage();
    }
}

// Carregua algumas imagens quando a página carregar inicialmente
for (let i = 0; i < 5; i++) {
    loadImage();
}


// Registra o evento de scroll
window.addEventListener('scroll', loadImagesOnScroll);
