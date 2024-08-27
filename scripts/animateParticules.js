const animateParticules = (note, noteMiddleTop, noteMiddleLeft) => {
    note.style.animation = 'none';
    // Supprimer le note après le clic
    note.remove();
    
    const particles = 100;  // Nombre de particules
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('note__particle');

        // Position initiale de la particule (au centre du note)
        particle.style.left = `${noteMiddleLeft}px`;
        particle.style.top = `${noteMiddleTop}px`;

        // Ajouter la particule au DOM
        document.body.appendChild(particle);

        // Calculer la direction aléatoire pour chaque particule
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 50;

        // Calculer la position finale des particules
        const finalX = radius * Math.cos(angle);
        const finalY = radius * Math.sin(angle);

        // Appliquer la transformation aux particules
        setTimeout(() => {
            particle.style.transform = `translate(${finalX}px, ${finalY - 20}px)`;
            particle.style.opacity = 0;
        }, 10);
    }
}

export { animateParticules };