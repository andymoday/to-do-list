
function createElements() {
    let content = document.getElementById("content");
    let projectContainer = document.createElement("container");
    projectContainer.setAttribute("id","project-container")
    content.appendChild(projectContainer);
    let addButton = document.createElement("button");
    addButton.setAttribute("id","add-menu")
    projectContainer.appendChild(addButton);
    let plusIcon = document.createElement("i");
    plusIcon.setAttribute("class","fas fa-plus");
    addButton.appendChild(plusIcon)
}

export {createElements}