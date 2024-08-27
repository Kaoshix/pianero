const animateNotes = (notes) => {
    const leftHandReceptacleOne = document.querySelector('#l1');
    const leftHandReceptacleTwo = document.querySelector('#l2');
    const leftHandReceptacleThree = document.querySelector('#l3');
    const leftHandReceptacleFour = document.querySelector('#l4');

    const rightHandReceptacleOne = document.querySelector('#r1');
    const rightHandReceptacleTwo = document.querySelector('#r2');
    const rightHandReceptacleThree = document.querySelector('#r3');
    const rightHandReceptacleFour = document.querySelector('#r4');

    const validationArea = document.querySelector('.playboard__validation-area');

    const middleOfValidationArea = validationArea.getBoundingClientRect().top + validationArea.getBoundingClientRect().height / 2;
    
    function animate() {

        notes.forEach((note, index) => {
            // Create a new div element for each note
            setTimeout(() => {
                const newNote = document.createElement('div');
                newNote.classList.add('note', 'note-animate', `note--${note.Key}`);
                newNote.style.animation = 'fadeIn 400ms linear forwards, go-down 4s linear forwards';

                if (index !== 0) {
                    if (notes[index].Time === notes[index + 1].Time || notes[index].Time === notes[index - 1].Time) {
                        newNote.classList.add('note__twin');
                    }
                }

                switch (note.Key) {
                    case 'l1':
                        leftHandReceptacleOne.appendChild(newNote);
                        break;
                    case 'l2':
                        leftHandReceptacleTwo.appendChild(newNote);
                        break;
                    case 'l3':
                        leftHandReceptacleThree.appendChild(newNote);
                        break;
                    case 'l4':
                        leftHandReceptacleFour.appendChild(newNote);
                        break;
                    case 'r1':
                        rightHandReceptacleOne.appendChild(newNote);
                        break;
                    case 'r2':
                        rightHandReceptacleTwo.appendChild(newNote);
                        break;
                    case 'r3':
                        rightHandReceptacleThree.appendChild(newNote);
                        break;
                    case 'r4':
                        rightHandReceptacleFour.appendChild(newNote);
                        break;
                    default:
                        break;
                }

                setTimeout(() => {
                    newNote.remove();
                }, 3000);

            }, (note.Time - 2) * 1000);
        })

    }

    requestAnimationFrame(animate);
}

export { animateNotes };