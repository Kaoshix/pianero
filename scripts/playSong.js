const playSong = (song) => {
    const audio = new Audio(`../assets/songs/${song}.mp3`);
    audio.play();
}

export { playSong };