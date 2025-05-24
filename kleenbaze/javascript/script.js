window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerContainer = header.querySelector('.container');
    const heroSection = document.getElementById('home');
    const heroRect = heroSection.getBoundingClientRect();
    // Show header when at the top of the page or when hero is not in view
    if (window.scrollY === 0 || heroRect.bottom <= 0 || heroRect.top >= window.innerHeight) {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 1.6s, background 0.4s';
        header.style.background = 'rgba(1, 24, 48, 0.85)';
        headerContainer.style.opacity = '1';
        headerContainer.style.pointerEvents = 'auto';
    } else {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.7s, background 0.4s';
        header.style.background = 'rgba(1, 24, 48, 0.85)';
        headerContainer.style.opacity = '0';
        headerContainer.style.pointerEvents = 'none';
    }
});