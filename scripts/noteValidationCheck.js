import { animateFragments } from "./animateFragments.js";

const noteValidationCheck = (receptacle, e, receptacleValidationPositionTop, receptacleValidationPositionBottom) => {
    if (e.key === receptacle.dataset.key) {

        const notesMini = Array.from(document.querySelectorAll(`.note-mini--${receptacle.id}`));

        if (notesMini.length == 0) return;

        // Remove notes that are below the receptacle's validation area
        notesMini.forEach(note => {
            const notePositionTop = note.getBoundingClientRect().top;

            if (notePositionTop > receptacleValidationPositionBottom) {
                return;
            } else {
                notesMini.slice(notesMini.indexOf(note));
            }
        })
        
        notesMini.forEach(note => {
            const notePositionTop = note.getBoundingClientRect().top;
            const notePositionBottom = note.getBoundingClientRect().bottom;

            if (notePositionTop > receptacleValidationPositionBottom) {
                return;
            }

            if (notePositionBottom > (receptacleValidationPositionTop - 120) && notePositionBottom < receptacleValidationPositionTop) {
                note.remove();
                console.log('lose');
                return;
            } 

            if (notePositionTop > receptacleValidationPositionTop && notePositionBottom < receptacleValidationPositionBottom) {
                
                animateFragments(note, notePositionTop);
                return;
            }
            
            if (notePositionBottom > receptacleValidationPositionTop || (notePositionTop < receptacleValidationPositionBottom && notePositionBottom > receptacleValidationPositionBottom)) {
                animateFragments(note, notePositionTop);
                return;
            }
        })
    }
}

export { noteValidationCheck };