document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    let currentIndex = 0;

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const autoSlide = () => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;

        if (!nextSlide) {
            nextSlide = slides[0];
        }

        moveToSlide(track, currentSlide, nextSlide);
        currentIndex = (currentIndex + 1) % slides.length;
    };

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    setInterval(autoSlide, 3000); // Muda de slide a cada 3 segundos
});
