const animateFragments = (note, notePositionTop) => {
    note.style.backgroundColor = 'transparent';
    note.style.animation = 'none';
    note.style.top = notePositionTop + 'px';

    const fragments = Array.from(note.querySelectorAll('.fragment'));
    fragments.map((fragment, index) => {
        if (index % 2 === 0) {
            fragment.style.animation = 'fragment-left-break 200ms ease forwards';
        } else {
            fragment.style.animation = 'fragment-right-break 200ms ease forwards';
        }
    });

    setTimeout(() => {
        note.remove();
    }, 200);
}

export { animateFragments };