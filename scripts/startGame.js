import { animateNotes } from "./animateNotes.js";
import { fetchCSV } from "./fetchCSV.js";
import { playMusic } from "./playMusic.js";
import { onKeyPressed } from "./onKeyPressed.js";
import { addBackgroundVideo } from "./addBackgroundVideo.js";

const startGame = (songName) => {

    fetchCSV(songName).then(notes => {
        playMusic(songName);
        addBackgroundVideo(songName);
        animateNotes(notes);
        const playContentWindow = document.querySelector('.play-content-window');
        playContentWindow.style.display = 'block';
        playContentWindow.style.animation = 'fadeIn 2s forwards';
    })

    onKeyPressed();
}

export { startGame };

