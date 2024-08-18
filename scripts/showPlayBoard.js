const showPlayBoard = (song) => {

    const playContentWindow = document.querySelector('.play-content-window');

    playContentWindow.style.display = 'block';
    playContentWindow.style.animation = 'fadeIn 2s forwards';

    const video = document.createElement("video");
    video.src = `./assets/videos/${song}.mp4`;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = "fixed";
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = "100vw";
    video.style.height = "100vh";
    video.style.objectFit = "cover";
    video.style.zIndex = -1;
    video.style.animation = "fadeInHalf 1s linear forwards";
    document.body.appendChild(video);
}

export { showPlayBoard };