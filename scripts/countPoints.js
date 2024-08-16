const countPoints = (score, point) => {
    const currentScore = parseInt(score.textContent);
    score.textContent = currentScore + point;
}

export { countPoints };