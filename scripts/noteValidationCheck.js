import { addTextValidation } from "./addTextValidation.js";
import { animateFragments } from "./animateFragments.js";
import { countPoints } from "./countPoints.js";

const noteValidationCheck = (receptacle, e, receptacleValidationPositionTop, receptacleValidationPositionBottom, score, textScoreLanding) => {
    const perfect = 200;
    const great = 100;
    const miss = 0;
    
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

            // Miss
            if (notePositionBottom > (receptacleValidationPositionTop - 120) && notePositionBottom < receptacleValidationPositionTop) {
                note.remove();
                countPoints(score, miss);
                addTextValidation('miss', textScoreLanding);
                return;
            } 

            // Perfect
            if (notePositionTop > receptacleValidationPositionTop && notePositionBottom < receptacleValidationPositionBottom) {
                animateFragments(note, notePositionTop);
                countPoints(score, perfect);
                addTextValidation('perfect', textScoreLanding);
                return;
            }
            
            // Great
            if (notePositionBottom > receptacleValidationPositionTop || (notePositionTop < receptacleValidationPositionBottom && notePositionBottom > receptacleValidationPositionBottom)) {
                animateFragments(note, notePositionTop);
                countPoints(score, great);
                addTextValidation('great', textScoreLanding);
                return;
            }
        })
    }
}

export { noteValidationCheck };