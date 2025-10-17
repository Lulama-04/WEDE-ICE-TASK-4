//I chatGPT this part as i can't recall what you did in class

// Accordion Functionality
const accButtons = document.querySelectorAll('.accordion-btn');
accButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = content.style.maxHeight;

        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
        content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";
    });
});

// Lightbox Functionality
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightbox.innerHTML = `<span class="lightbox-close">&times;</span><img src="">`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const closeLightbox = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.scapes img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

closeLightbox.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) lightbox.style.display = 'none';
});

