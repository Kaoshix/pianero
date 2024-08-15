const animateNotes = (notes) => {
    const leftHandReceptacleOne = document.querySelector('#l1');
    const leftHandReceptacleTwo = document.querySelector('#l2');
    const leftHandReceptacleThree = document.querySelector('#l3');
    const leftHandReceptacleFour = document.querySelector('#l4');

    const rightHandReceptacleOne = document.querySelector('#r1');
    const rightHandReceptacleTwo = document.querySelector('#r2');
    const rightHandReceptacleThree = document.querySelector('#r3');
    const rightHandReceptacleFour = document.querySelector('#r4');
    
    function animate() {

        notes.forEach(note => {

            // Create a new div element for each note
            setTimeout(() => {
                const newElement = document.createElement('div');

                for (let i = 1; i < 9; i++) {
                    const noteFragment = document.createElement('div');
                    noteFragment.classList.add('fragment', `fragment-${i}`);
                    newElement.appendChild(noteFragment);
                }

                newElement.classList.add('notes-mini', 'note-animate', `note-mini--${note.Key}`);

                switch (note.Key) {
                    case 'l1':
                        leftHandReceptacleOne.appendChild(newElement);
                        break;
                    case 'l2':
                        leftHandReceptacleTwo.appendChild(newElement);
                        break;
                    case 'l3':
                        leftHandReceptacleThree.appendChild(newElement);
                        break;
                    case 'l4':
                        leftHandReceptacleFour.appendChild(newElement);
                        break;
                    case 'r1':
                        rightHandReceptacleOne.appendChild(newElement);
                        break;
                    case 'r2':
                        rightHandReceptacleTwo.appendChild(newElement);
                        break;
                    case 'r3':
                        rightHandReceptacleThree.appendChild(newElement);
                        break;
                    case 'r4':
                        rightHandReceptacleFour.appendChild(newElement);
                        break;
                    default:
                        break;
                }

                setTimeout(() => {
                    newElement.remove();
                }, 3000);

            }, (note.Time - 2) * 1000);
        })

    }

    requestAnimationFrame(animate);
}

export { animateNotes };