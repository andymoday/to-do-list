import {createElements} from './loadFunc.js';
import {openPForm,openTForm,closePForm,closeTForm} from './DOM-update.js';

createElements();

let addProBtn = document.getElementById('addP')

addProBtn.addEventListener('click', () => {
    openPForm();
});

let addTodoBtn = document.getElementById('addT')

addTodoBtn.addEventListener('click', () => {
    openTForm();
});

