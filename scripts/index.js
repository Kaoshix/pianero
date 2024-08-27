import { startGame } from './startGame.js';

(function() {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {


        const songButton = Array.from(document.querySelectorAll('.song-button'));
        const layerBackgroundImage = document.querySelector('.song-select__layer-background-image');
        const layerOpaqueMask = document.querySelector('.song-select__layer-opaque-mask');

        songButton.forEach(button => {
            const song = button.dataset.song;
            button.addEventListener('mouseover', handleMouseOver);
            button.addEventListener('mouseout', handleMouseOut);
            button.addEventListener('click', handleClick);

            function handleMouseOut() {
                layerBackgroundImage.style.animation = "fadeOut 150ms ease-in forwards";
                layerOpaqueMask.style.animation = "fadeOut 250ms ease-in forwards";
                button.classList.remove('song-button--active');
            }

            function handleMouseOver() {
                layerBackgroundImage.style.background = `url(./assets/images/${song}.webp) no-repeat`;
                layerBackgroundImage.style.backgroundSize = "cover";
                layerBackgroundImage.style.animation = "fadeIn 250ms ease-in forwards";
                layerOpaqueMask.style.animation = "fadeIn 0ms ease-in forwards";

                button.classList.add('song-button--active');
            }

            function handleClick() {
                button.classList.add('song-button--active');
                songButton.forEach(btn => {
                    btn.disabled = true;
                    btn.style.pointerEvents = "none";
                    if (btn !== button) {
                        btn.style.animation = "songs-buttons-dissapear-left 500ms ease-in forwards";
                    } else {
                        setTimeout(() => {
                            btn.style.animation = "songs-buttons-dissapear-up 500ms ease-in forwards";
                        }, 300);

                        setTimeout(() => {
                            layerBackgroundImage.style.animation = "fadeOut 300ms ease-in forwards";
                            document.body.style.backgroundColor = "black";
                        }, 1500);
                    }
                })
                    
                    setTimeout(() => {
                        startGame(song);
                    }, 2000);
            }
        })
    });

})();