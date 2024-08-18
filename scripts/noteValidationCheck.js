import { addTextValidation } from "./addTextValidation.js";
import { animateFragments } from "./animateFragments.js";
import { countPoints } from "./countPoints.js";

const noteValidationCheck = (receptacle, e, validationAreaTop, validationAreaBottom, score, textScoreLanding) => {
    const perfect = 200;
    const great = 100;
    const miss = 0;
    
    if (e.key === receptacle.dataset.key) {

        const notesMini = Array.from(document.querySelectorAll(`.note-mini--${receptacle.id}`));

        if (notesMini.length == 0) return;

        // Remove notes that are below the receptacle's validation area
        notesMini.forEach(note => {
            const notePositionTop = note.getBoundingClientRect().top;

            if (notePositionTop > validationAreaBottom) {
                return;
            } else {
                notesMini.slice(notesMini.indexOf(note));
            }
        })
        
        notesMini.forEach(note => {
            const notePositionTop = note.getBoundingClientRect().top;
            const notePositionBottom = note.getBoundingClientRect().bottom;

            if (notePositionTop > validationAreaBottom) {
                return;
            }

            // Miss
            if (notePositionBottom > (validationAreaTop - 120) && notePositionBottom < validationAreaTop) {
                note.remove();
                countPoints(score, miss);
                addTextValidation('miss', textScoreLanding);
                return;
            } 

            // Perfect
            if (notePositionTop > validationAreaTop && notePositionBottom < validationAreaBottom) {
                animateFragments(note, notePositionTop);
                countPoints(score, perfect);
                addTextValidation('perfect', textScoreLanding);
                return;
            }
            
            // Great
            if (notePositionBottom > validationAreaTop || (notePositionTop < validationAreaBottom && notePositionBottom > validationAreaBottom)) {
                animateFragments(note, notePositionTop);
                countPoints(score, great);
                addTextValidation('great', textScoreLanding);
                return;
            }
        })
    }
}

export { noteValidationCheck };