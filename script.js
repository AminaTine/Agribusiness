/*document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselContainer = document.querySelector('.carousel-container');

    let scrollAmount = 0;

    prevButton.addEventListener('click', () => {
        scrollAmount -= 300; // Ajustez cette valeur selon la largeur de vos images
        if (scrollAmount < 0) {
            scrollAmount = 0; // Empêche le défilement au-delà du début
        }
        carouselContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });

    nextButton.addEventListener('click', () => {
        scrollAmount += 300; // Ajustez cette valeur selon la largeur de vos images
        if (scrollAmount > carouselContainer.scrollWidth - carouselContainer.clientWidth) {
            scrollAmount = carouselContainer.scrollWidth - carouselContainer.clientWidth; // Empêche le défilement au-delà de la fin
        }
        carouselContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });
});*/
document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 3000
    }).mount();
});
