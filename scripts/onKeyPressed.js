import { animateReceptacle } from "./animateReceptacle.js";
import { noteValidationCheck } from "./noteValidationCheck.js";

const onKeyPressed = () => {

    const receptacles = document.querySelectorAll('.receptacle');

    Array.from(receptacles).forEach(receptacle => {

        animateReceptacle(receptacle);

        const receptacleValidation = receptacle.querySelector('span');
        const receptacleValidationPositionTop = receptacleValidation.getBoundingClientRect().top;
        const receptacleValidationPositionBottom = receptacleValidation.getBoundingClientRect().bottom;
        const score = document.querySelector('.score');
        const textScoreLanding = document.querySelector('.text-score-landing');

        document.addEventListener('keydown', function(e) {
            if (!e.repeat) {
                noteValidationCheck(receptacle, e, receptacleValidationPositionTop, receptacleValidationPositionBottom, score, textScoreLanding);
            }
        })
    })
}

export { onKeyPressed };