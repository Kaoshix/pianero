import { startGame } from './startGame.js';

(function() {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        const buttonStart = document.querySelectorAll('.start-button');
        const buttonsContainer = document.querySelector('.buttons-container');

        Array.from(buttonStart).forEach(button => {
            button.addEventListener('click', () => {
                startGame(button.dataset.songname);
                buttonsContainer.style.display = 'none';
            })
        })
    });

})();