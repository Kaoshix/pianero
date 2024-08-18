const addTextValidation = (validationLevel, textScoreLanding) => {
    const textValidation = document.createElement('div');
    textValidation.classList.add(`text-validation--${validationLevel}`);
    textValidation.style.animation = 'score-text 700ms ease-out forwards';
    textValidation.textContent = validationLevel.charAt(0).toUpperCase() + validationLevel.slice(1);;
    textScoreLanding.replaceChildren(textValidation);
    
    setTimeout(() => {
        textValidation.remove();
    }, 700);
}

export { addTextValidation };