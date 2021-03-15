import {Project, projectsModule} from './app-logic.js';

function openPForm() {
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
    const projects = document.getElementById('content');
    let newProject = document.createElement('div');
    newProject.setAttribute('class', 'project');
    console.log('now',project.getProjectName())
    newProject.textContent = project.getProjectName(); 
    projectContainerModule.addProjectToContainer(newProject);
    projects.append(newProject)
    //populateStorage();
}


export {openPForm,openTForm,closePForm,closeTForm,projectDisplay}

