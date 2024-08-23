import { animatePianoKey } from "./animatePianoKey.js";
import { noteValidationCheck } from "./noteValidationCheck.js";

const onKeyPressed = () => {

    const pianoKeys = document.querySelectorAll('.piano-key');
    const validationArea = document.querySelector('.playboard__validation-area');
    const validationAreaTop = validationArea.getBoundingClientRect().top;
    const validationAreaBottom = validationArea.getBoundingClientRect().bottom;

    const score = document.querySelector('.playboard__score');
    const textScoreLanding = document.querySelector('.text-score-landing');

    Array.from(pianoKeys).forEach(pianoKey => {

        animatePianoKey(pianoKey);

        document.addEventListener('keydown', function(e) {
            if (!e.repeat) {
                noteValidationCheck(pianoKey, e, validationAreaTop, validationAreaBottom, score, textScoreLanding);
            }
        })
    })
}

export { onKeyPressed };