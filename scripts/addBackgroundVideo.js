const addBackgroundVideo = (songName) => {
    const video = document.createElement("video");
    video.src = `./assets/videos/${songName}.mp4`;
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

export { addBackgroundVideo };