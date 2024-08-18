import { startGame } from './startGame.js';

(function() {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        const songButton = document.querySelectorAll('.song-button');
        const songInfos = document.querySelector('.song-infos');

        Array.from(songButton).forEach(button => {
            button.addEventListener('mouseover', () => {
                
                songInfos.style.background = `url(./assets/images/${button.dataset.songname}.webp) no-repeat`;
                songInfos.style.backgroundSize = "cover";
                songInfos.style.backgroundPosition = "left";
                songInfos.style.animation = "fadeIn 250ms ease-in forwards"
            })

            button.addEventListener('mouseout', () => {
                songInfos.style.animation = "fadeOut 150ms ease-in forwards";
            })
            button.addEventListener('click', () => {
                startGame(button.dataset.songname);
                songInfos.style.display = 'none';
            })
        })
    });

})();