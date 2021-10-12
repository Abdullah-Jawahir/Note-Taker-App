const inputForm = document.getElementById('input-form');
const notes = document.getElementById('user-notes');
const output = document.getElementById('output');
const fullScreen = document.getElementById('full-screen');
const notepadTexts = document.querySelector('#notepad p');
const closeIcon = document.getElementById('close-icon');


inputForm.addEventListener('submit', addNotes);

function addNotes(me) {
    me.preventDefault();

    const displayCard = document.createElement('div');
    displayCard.className = 'd-flex flex-column justify-content-around border border-secondary p-2';

    const contents = `
    
    <p>${notes.value}</p>
    <button class="btn btn-primary">
        Show more
    </button>

    `;


    displayCard.innerHTML = contents;
    output.appendChild(displayCard);


    notes.value = '';


    const showBtns = document.querySelectorAll('#output div button');

    showBtns.forEach((btn) => {

        const fullNote = btn.parentElement.firstElementChild.innerText;

        btn.addEventListener('click', () => {
            fullScreen.style.visibility = 'visible';
            notepadTexts.innerText = fullNote;

        });
        
    });


    closeIcon.addEventListener('click', () => {
        fullScreen.style.visibility = 'collapse';
    });
    

}
