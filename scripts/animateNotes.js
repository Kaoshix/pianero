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

        notes.forEach(note => {
            // Create a new div element for each note
            setTimeout(() => {
                const newNote = document.createElement('div');

                for (let i = 1; i < 9; i++) {
                    const noteFragment = document.createElement('div');
                    noteFragment.classList.add('note__fragment', `note__fragment--${i}`);
                    newNote.appendChild(noteFragment);
                }

                newNote.classList.add('note', 'note-animate', `note--${note.Key}`);
                newNote.style.animation = 'fadeIn 400ms linear forwards, go-down 4s linear forwards';

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