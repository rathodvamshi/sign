document.addEventListener('DOMContentLoaded', () => {
    const backgroundAnimation = document.querySelector('.background-animation');

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 20 + 10; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        
        backgroundAnimation.appendChild(particle);

        particle.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(-100px)', opacity: 0 },
        ], {
            duration: 5000, 
            easing: 'ease-in-out',
            fill: 'forwards',
        });

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }

    setInterval(createParticle, 300);
});
