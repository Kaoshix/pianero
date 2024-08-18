import { animateReceptacle } from "./animateReceptacle.js";
import { noteValidationCheck } from "./noteValidationCheck.js";

const onKeyPressed = () => {

    const receptacles = document.querySelectorAll('.receptacle');
    const validationArea = document.querySelector('.validation-area');
    const validationAreaTop = validationArea.getBoundingClientRect().top;
    const validationAreaBottom = validationArea.getBoundingClientRect().bottom;

    const score = document.querySelector('.score');
    const textScoreLanding = document.querySelector('.text-score-landing');

    Array.from(receptacles).forEach(receptacle => {

        animateReceptacle(receptacle);

        document.addEventListener('keydown', function(e) {
            if (!e.repeat) {
                noteValidationCheck(receptacle, e, validationAreaTop, validationAreaBottom, score, textScoreLanding);
            }
        })
    })
}

export { onKeyPressed };