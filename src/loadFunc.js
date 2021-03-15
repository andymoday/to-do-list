import {addProject} from './app-logic.js';
import {closeTForm,closePForm} from './DOM-update.js';

function createElements() {
    let content = document.getElementById("content");
    
    let projectContainer = document.createElement("container");
    projectContainer.setAttribute("id","project-container")
    content.appendChild(projectContainer);
    
    let dropdown = document.createElement("dropdown");
    dropdown.setAttribute("class","dropdown");
    content.appendChild(dropdown);

    let addButton = document.createElement("button");
    addButton.setAttribute("class","dropbtn");
    dropdown.appendChild(addButton);
    
    let plusIcon = document.createElement("i");
    plusIcon.setAttribute("class","fas fa-plus");
    addButton.appendChild(plusIcon);

    let dropContent = document.createElement("div");
    dropContent.setAttribute("class","dropdown-content");
    addButton.appendChild(dropContent);

    let addP = document.createElement("a");
    addP.setAttribute("id","addP");
    addP.setAttribute("href","#");
    addP.textContent = "Project";
    dropContent.appendChild(addP);

    let addT = document.createElement("a");
    addT.setAttribute("id","addT");
    addT.setAttribute("href","#");
    addT.textContent = "Todo";
    dropContent.appendChild(addT);

//==============PROJECT FORM======================    
    let pForm = document.createElement("form");
    pForm.setAttribute("id","project-form");
    pForm.setAttribute("class","form-container");
    pForm.style.display = "none";
    pForm.onsubmit = addProject;
    projectContainer.appendChild(pForm);
    
    let pLabel1 = document.createElement("label");
    pLabel1.setAttribute("for","name");
    pLabel1.textContent = "Name: "
    pForm.appendChild(pLabel1);

    let pInput1 = document.createElement("input");
    pInput1.setAttribute("type","text");
    pInput1.setAttribute("id","p-name");
    pInput1.setAttribute("name","name");
    pForm.appendChild(pInput1)
    
    let pLabel2 = document.createElement("label");
    pLabel2.setAttribute("for","p-priority");
    pLabel2.textContent = "Priority: "
    pForm.appendChild(pLabel2);

    let pInput2 = document.createElement("select");
    pInput2.setAttribute("class","p-form-dropdown");
    pInput2.setAttribute("name","p-priority");
    pInput2.setAttribute("id","p-priority");
    pForm.appendChild(pInput2)

    let pLow = document.createElement("option");
    pLow.setAttribute("id","p-low");
    pLow.setAttribute("value","Low");
    pLow.textContent = "Low"
    pInput2.appendChild(pLow);

    let pMedium = document.createElement("option");
    pMedium.setAttribute("id","p-medium");
    pMedium.setAttribute("value","Medium");
    pMedium.textContent = "Medium"
    pInput2.appendChild(pMedium);

    let pHigh = document.createElement("option");
    pHigh.setAttribute("id","p-high");
    pHigh.setAttribute("value","High");
    pHigh.textContent = "High"
    pInput2.appendChild(pHigh);
    
    let pLabel3 = document.createElement("label");
    pLabel3.setAttribute("for","description");
    pLabel3.textContent = "Description: "
    pForm.appendChild(pLabel3);

    let pInput3 = document.createElement("textarea");
    pInput3.setAttribute("type","text");
    pInput3.setAttribute("id","p-description");
    pInput3.setAttribute("name","description");
    pInput3.setAttribute("rows","4");
    pInput3.setAttribute("cols","43");
    pForm.appendChild(pInput3)

    let pLabel4 = document.createElement("label");
    pLabel4.setAttribute("for","dueDate");
    pLabel4.textContent = "Due Date: "
    pForm.appendChild(pLabel4);

    let pInput4 = document.createElement("input")
    pInput4.setAttribute("type","date");
    pInput4.setAttribute("id","p-dueDate");
    pInput4.setAttribute("name","dueDate");
    pForm.appendChild(pInput4)

    let pSubmit = document.createElement("button");
    pSubmit.setAttribute("type","submit");
    pSubmit.setAttribute("class","btn submit");
    pSubmit.onclick = closePForm;
    pSubmit.textContent = "Submit"
    pForm.appendChild(pSubmit)

    let pClose = document.createElement("button");
    pClose.setAttribute("type","button");
    pClose.setAttribute("class","btn submit");
    pClose.onclick = closePForm;
    pClose.textContent = "Cancel"
    pForm.appendChild(pClose)


    //==============TODO FORM======================    
    let tForm = document.createElement("form");
    tForm.setAttribute("id","todo-form");
    tForm.setAttribute("class","form-container");
    tForm.style.display = "none";
    projectContainer.appendChild(tForm);
    
    let tLabel1 = document.createElement("label");
    tLabel1.setAttribute("for","name");
    tLabel1.textContent = "Name: "
    tForm.appendChild(tLabel1);

    let tInput1 = document.createElement("input");
    tInput1.setAttribute("type","text");
    tInput1.setAttribute("id","t-name");
    tInput1.setAttribute("name","name");
    tForm.appendChild(tInput1)
    
    let tLabel2 = document.createElement("label");
    tLabel2.setAttribute("for","t-priority");
    tLabel2.textContent = "Priority: "
    tForm.appendChild(tLabel2);

    let tInput2 = document.createElement("select");
    tInput2.setAttribute("class","t-form-dropdown");
    tInput2.setAttribute("name","t-priority");
    tInput2.setAttribute("id","t-priority");
    tForm.appendChild(tInput2)

    let tLow = document.createElement("option");
    tLow.setAttribute("id","t-low");
    tLow.setAttribute("value","Low");
    tLow.textContent = "Low"
    tInput2.appendChild(tLow);

    let tMedium = document.createElement("option");
    tMedium.setAttribute("id","t-medium");
    tMedium.setAttribute("value","Medium");
    tMedium.textContent = "Medium"
    tInput2.appendChild(tMedium);

    let tHigh = document.createElement("option");
    tHigh.setAttribute("id","t-high");
    tHigh.setAttribute("value","High");
    tHigh.textContent = "High"
    tInput2.appendChild(tHigh);
    
    let tLabel3 = document.createElement("label");
    tLabel3.setAttribute("for","description");
    tLabel3.textContent = "Description: "
    tForm.appendChild(tLabel3);

    let tInput3 = document.createElement("textarea");
    tInput3.setAttribute("type","text");
    tInput3.setAttribute("id","t-description");
    tInput3.setAttribute("name","description");
    tInput3.setAttribute("rows","4");
    tInput3.setAttribute("cols","43");
    tForm.appendChild(tInput3)

    let tLabel4 = document.createElement("label");
    tLabel4.setAttribute("for","dueDate");
    tLabel4.textContent = "Due Date: "
    tForm.appendChild(tLabel4);

    let tInput4 = document.createElement("input")
    tInput4.setAttribute("type","date");
    tInput4.setAttribute("id","t-dueDate");
    tInput4.setAttribute("name","dueDate");
    tForm.appendChild(tInput4)

    let tLabel5 = document.createElement("label");
    tLabel5.setAttribute("for","project");
    tLabel5.textContent = "Project: "
    tForm.appendChild(tLabel5);

    let tInput5 = document.createElement("select");
    tInput5.setAttribute("class","t-form-dropdown");
    tInput5.setAttribute("name","project");
    tInput5.setAttribute("id","t-project");
    tForm.appendChild(tInput5)

    let tSubmit = document.createElement("button");
    tSubmit.setAttribute("type","submit");
    tSubmit.setAttribute("class","btn submit");
    tSubmit.onclick = closeTForm;
    tSubmit.textContent = "Submit"
    tForm.appendChild(tSubmit)

    let tClose = document.createElement("button");
    tClose.setAttribute("type","button");
    tClose.setAttribute("class","btn submit");
    tClose.onclick = closeTForm;
    tClose.textContent = "Cancel"
    tForm.appendChild(tClose)
}

export {createElements}

