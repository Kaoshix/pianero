const animateReceptacle = (receptacle) => {

    document.addEventListener('keypress', function(e) {
        if (e.key === receptacle.dataset.key) {
            receptacle.classList.add('receptacle--active');
        }
    })

    document.addEventListener('keyup', function(e) {
        if (e.key === receptacle.dataset.key) {
            receptacle.classList.remove('receptacle--active');
        }
    })
}

export { animateReceptacle };