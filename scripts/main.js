import { startGame } from './startGame.js';

(function() {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        const buttonStart = document.querySelectorAll('.start-button');
        const songSelectWindow = document.querySelector('.song-select-window');

        Array.from(buttonStart).forEach(button => {
            button.addEventListener('mouseover', () => {
                
                songSelectWindow.style.background = `url(./assets/images/${button.dataset.songname}.webp) no-repeat`;
                songSelectWindow.style.backgroundSize = "cover";
                songSelectWindow.style.backgroundPosition = "center";
            })
            button.addEventListener('click', () => {
                startGame(button.dataset.songname);
                songSelectWindow.style.display = 'none';
            })
        })
    });

})();