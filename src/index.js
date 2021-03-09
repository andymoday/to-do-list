import {createElements} from './loadFunc.js';
import {projectForm,closeForm} from './form-popups.js';

createElements();

let addTodoBtn = document.getElementById('addP')

addTodoBtn.addEventListener('click', () => {
    projectForm();
});