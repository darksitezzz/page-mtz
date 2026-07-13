// 1. Seleccionamos los elementos del DOM necesarios
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

// 2. Añadimos el evento Click a cada elemento de la galería
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Obtenemos la imagen interna y el texto del overlay
        const img = item.querySelector('img');
        const text = item.querySelector('.overlay span').textContent;

        // Pasamos la información al Lightbox
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        caption.textContent = `${text} - ${img.alt}`;

        // Mostramos el Lightbox cambiando el estilo de 'none' a 'flex'
        lightbox.style.display = 'flex';
    });
});

// 3. Función para cerrar el Lightbox
const closeLightbox = () => {
    lightbox.style.display = 'none';
};

// Cerrar al hacer clic en el botón (X)
closeBtn.addEventListener('click', closeLightbox);

// Cerrar al hacer clic fuera de la imagen (en el fondo oscuro)
lightbox.addEventListener('click', (e) => {
    // Nos aseguramos de que el clic fue en el fondo y no en la foto o el texto
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// EXTRA: Cerrar también al presionar la tecla 'Escape'
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});