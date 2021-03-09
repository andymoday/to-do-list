
function createElements() {
    let content = document.getElementById("content");
    
    let projectContainer = document.createElement("container");
    projectContainer.setAttribute("id","project-container")
    content.appendChild(projectContainer);
    
    let dropdown = document.createElement("dropdown");
    dropdown.setAttribute("class","dropdown");
    projectContainer.appendChild(dropdown);

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

}

export {createElements}

