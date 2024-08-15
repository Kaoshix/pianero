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
    })

    onKeyPressed();
}

export { startGame };

