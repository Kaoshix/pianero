import { animateNotes } from "./animateNotes.js";
import { fetchCSV } from "./fetchCSV.js";
import { playSong } from "./playSong.js";
import { onKeyPressed } from "./onKeyPressed.js";
import { showPlayBoard } from "./showPlayBoard.js";

const startGame = (song) => {

    fetchCSV(song).then(notes => {
        showPlayBoard(song);
        playSong(song);
        animateNotes(notes);
        onKeyPressed();
    })
}

export { startGame };

