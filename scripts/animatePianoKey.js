const animatePianoKey = (pianoKey) => {

    document.addEventListener('keypress', function(e) {
        if (e.key === pianoKey.dataset.key) {
            pianoKey.classList.add('piano-key--active');
        }
    })

    document.addEventListener('keyup', function(e) {
        if (e.key === pianoKey.dataset.key) {
            pianoKey.classList.remove('piano-key--active');
        }
    })
}

export { animatePianoKey };