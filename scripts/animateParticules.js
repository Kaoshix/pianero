const animateParticules = (note, notePositionTop) => {
    note.style.animation = 'none';
    note.style.top = notePositionTop + 'px';
    
    const particles = 100;  // Nombre de particules
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('note__particle');

        // Position initiale de la particule (au centre du note)
        const x = note.offsetWidth / 2;
        const y = note.offsetHeight / 2;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Ajouter la particule au DOM
        note.appendChild(particle);

        // Calculer la direction aléatoire pour chaque particule
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * note.offsetHeight;

        // Calculer la position finale des particules
        const finalX = radius * Math.cos(angle);
        const finalY = radius * Math.sin(angle);

        // Appliquer la transformation aux particules
        setTimeout(() => {
            particle.style.transform = `translate(${finalX}px, ${finalY - 20}px)`;
            particle.style.opacity = 0;
        }, 10);
    }

    // Supprimer le note après le clic
    note.style.backgroundColor = 'transparent';

    // Supprimer les particules après l'animation
    setTimeout(() => {
        while (note.firstChild) {
            note.removeChild(note.firstChild);
        }
    }, 1000);
}

export { animateParticules };