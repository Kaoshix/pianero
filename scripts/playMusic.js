const playMusic = (songName) => {
    const audio = new Audio(`../assets/musics/${songName}.mp3`);
    audio.play();
}

export { playMusic };