import {projectsModule,formReset} from './app-logic.js';

function openPForm() {
    formReset()
    document.getElementById('project-form').style.display = "block"
}

function closePForm() {
    document.getElementById('project-form').style.display = "none"
}

function openTForm() {
    document.getElementById('todo-form').style.display = "block"
}

function closeTForm() {
    document.getElementById('todo-form').style.display = "none"
}

const projectContainerModule = (function(){
    let projectContainer = [];
    function getprojectContainer(){
        return projectContainer;
    }
    function addProjectToContainer(div){
        projectContainer.push(div)
        return projectContainer;
    } 
    function delProjectFromContainer(div){
        let i = projectContainer.indexOf(div);
        projectContainer.splice(i,1)
        return projectContainer;
}   
    return {getprojectContainer, 
            addProjectToContainer, 
            delProjectFromContainer
            }
})();

function projectDisplay(index) {
    const project = projectsModule.getProjects()[index]
    const projects = document.getElementById('project-container');
    let newProject = document.createElement('div');
    newProject.setAttribute('class', 'project');
    
    let name = document.createElement('div')
    name.setAttribute("class","project-name");
    name.textContent = project.getProjectName(); 
    newProject.appendChild(name);

    let desc = document.createElement('div')
    desc.setAttribute("class","project-description");
    desc.textContent = project.getProjectDesc()
    newProject.appendChild(desc);

    let priority = document.createElement('div')
    priority.setAttribute("class","project-priority");
    priority.textContent = project.getProjectPriority();
    newProject.appendChild(priority);

    let date = document.createElement('div')
    date.setAttribute("class","project-date");
    date.textContent = project.getProjectDueDate();
    newProject.appendChild(date);

    let todos = document.createElement('div')
    todos.setAttribute("class","project-todos");
    todos.textContent = project.getProjectTodos();
    newProject.appendChild(todos);

    projectContainerModule.addProjectToContainer(newProject);
    projects.append(newProject)
    //populateStorage();
}


export {openPForm,openTForm,closePForm,closeTForm,projectDisplay}

