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