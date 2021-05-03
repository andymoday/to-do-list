import {projectDisplay} from './DOM-update.js'

class Project {
    constructor (name, desc, priority, dueDate, todos) {
        this.projectName = name;
        this.projectDesc = desc;
        this.projectPriority = priority;
        this.projectDueDate = dueDate;
        this.projectTodos = todos;
    }
    getProjectName(){return this.projectName;}
    getProjectDesc(){return this.projectDesc;}
    getProjectPriority(){return this.projectPriority;}
    getProjectDueDate() {return this.projectDueDate;}
    getProjectTodos() {return this.projectTodos;}
    setProjectName(newName) {this.projectName = newName; return this.projectName}
    setProjectDesc(newDesc) {this.projectDesc = newDesc; return this.projectDesc}
    setProjectPriority(newPriority) {this.projectPriority = newPriority; return this.projectPriority}
    setProjectDueDate(newDueDate)  {this.projectDueDate = newDueDate; return this.projectDueDate}
    setProjectTodos(newTodos) {this.projectTodos = newTodos; return this.projectTodos} 
}

class Todo {
    constructor (name, desc, priority, dueDate, project) {
        this.todoName = name;
        this.todoDesc = desc;
        this.todoPriority = priority;
        this.todoDueDate = dueDate;
        this.todoProject = project;
    }
    getTodoName(){return this.todoName;}
    getTodoDesc(){return this.todoDesc;}
    getTodoPriority(){return this.todoPriority;}
    getTodoDueDate(){return this.todoDueDate;}
    getTodoProject(){return this.todoProject;}
    setTodoName(newName) {this.todoName = newName; return this.todoName}
    setTodoDesc(newDesc) {this.todoDesc = newDesc; return this.todoDesc}
    setTodoPriority(newPriority) {this.todoPriority = newPriority; return this.todoPriority}
    setTodoDueDate(newDueDate) {this.todoDueDate = newDueDate; return this.todoDueDate}
    setTodoProject(newProject) {this.todoProject = newProject; return this.todoProject} 
}

const projectsModule = (function(){
    let projects = [];
    function getProjects(){
        return projects;
    }
    function addProject(project){
        projects.push(project)
        return projects;
    } 
    function delProject(project){
        let i = projects.indexOf(project);
        projects.splice(i,1)
        return projects;
}   
    return {getProjects, 
            addProject, 
            delProject
            }
})();

const todosModule = (function(){
    let todos = [];
    function getTodos(){
        return todos;
    }
    function addTodo(todo){
        todos.push(todo)
        return todos;
    } 
    function delTodo(todo){
        let i = todos.indexOf(todo);
        todos.splice(i,1)
        return todos;
}   
    return {getTodos, 
            addTodo, 
            delTodo
            }
})();

const addProjectToArray = function(name, desc, priority, dueDate) {
    let newProject = new Project(name, desc, priority, dueDate)
    projectsModule.addProject(newProject)
}

function addProject() {        //form submission for project

    let project_name = document.getElementById('p-name').value;
    let project_priority = document.getElementById('p-priority').value;
    let project_description = document.getElementById('p-description').value;
    let project_dueDate = document.getElementById('p-dueDate').value
    addProjectToArray(project_name,project_description,project_priority,project_dueDate);
    let arr = projectsModule.getProjects(); 
    let index = arr.length -1
    projectDisplay(index);
    formReset()
    return false;//It's important to return false; to prevent default behaviour at the end of your submit handler, as otherwise the form will post and reload the page.
}

function formReset() {
    document.getElementById('p-name').value = null
    document.getElementById('p-priority').value = 'Low'
    document.getElementById('p-description').value = null
    document.getElementById('p-dueDate').value = null
}
export {addProject,projectsModule,formReset}