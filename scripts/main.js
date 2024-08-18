import { startGame } from './startGame.js';

(function() {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {


        const songButton = Array.from(document.querySelectorAll('.song-button'));
        const songInfos = document.querySelector('.song-infos');

        songButton.forEach(button => {
            const song = button.dataset.song;
            button.addEventListener('mouseover', handleMouseOver);
            button.addEventListener('mouseout', handleMouseOut);
            button.addEventListener('click', handleClick);

            function handleMouseOut() {
                songInfos.style.animation = "fadeOut 150ms ease-in forwards";
                button.classList.remove('song-button--active');
            }

            function handleMouseOver() {
                songInfos.style.background = `url(./assets/images/${song}.webp) no-repeat`;
                songInfos.style.backgroundSize = "cover";
                songInfos.style.backgroundPosition = "left";
                songInfos.style.animation = "fadeIn 250ms ease-in forwards";

                button.classList.add('song-button--active');
            }

            function handleClick() {
                button.classList.add('song-button--active');
                    
                    songButton.forEach(btn => {
                        if (btn !== button) {
                            btn.style.animation = "songs-buttons-dissapear-left 500ms ease-in forwards";
                        } else {
                            setTimeout(() => {
                                btn.style.animation = "songs-buttons-dissapear-up 500ms ease-in forwards";
                            }, 300);

                            setTimeout(() => {
                                songInfos.style.animation = "fadeOut 300ms ease-in forwards";
                            }, 1500);
                        }
                    })
                    
                    setTimeout(() => {
                        startGame(song);
                    }, 2500);

                button.removeEventListener('mouseout', handleMouseOut);
                button.removeEventListener('mouseover', handleMouseOver);
                button.removeEventListener('click', handleClick);
            }
        })
    });

})();