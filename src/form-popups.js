function projectForm() {

    let projectContainer = document.getElementById("project-container");
    
    let form = document.createElement("form");
    form.setAttribute("id","project-form");
    form.setAttribute("class","form-container");
    projectContainer.appendChild(form);
    
    let label1 = document.createElement("label");
    label1.setAttribute("for","name");
    label1.textContent = "Name: "
    form.appendChild(label1);

    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","name");
    input1.setAttribute("name","name");
    form.appendChild(input1)
    
    let label2 = document.createElement("label");
    label2.setAttribute("for","priority");
    label2.textContent = "Priority: "
    form.appendChild(label2);

    let input2 = document.createElement("select");
    input2.setAttribute("class","p-form-dropdown");
    input2.setAttribute("name","priority");
    input2.setAttribute("id","priority");
    form.appendChild(input2)

    let low = document.createElement("option");
    low.setAttribute("id","low");
    low.setAttribute("value","Low");
    low.textContent = "Low"
    input2.appendChild(low);

    let medium = document.createElement("option");
    medium.setAttribute("id","Medium");
    medium.setAttribute("value","Medium");
    medium.textContent = "Medium"
    input2.appendChild(medium);

    let high = document.createElement("option");
    high.setAttribute("id","High");
    high.setAttribute("value","High");
    high.textContent = "High"
    input2.appendChild(high);
    
    let label3 = document.createElement("label");
    label3.setAttribute("for","description");
    label3.textContent = "Description: "
    form.appendChild(label3);

    let input3 = document.createElement("textarea");
    input3.setAttribute("type","text");
    input3.setAttribute("id","description");
    input3.setAttribute("name","description");
    input3.setAttribute("rows","4");
    input3.setAttribute("cols","43");
    form.appendChild(input3)

    let label4 = document.createElement("label");
    label4.setAttribute("for","dueDate");
    label4.textContent = "Due Date: "
    form.appendChild(label4);

    let input4 = document.createElement("input")
    input4.setAttribute("type","date");
    input4.setAttribute("id","dueDate");
    input4.setAttribute("name","dueDate");
    form.appendChild(input4)

    let submit = document.createElement("button");
    submit.setAttribute("type","submit");
    submit.setAttribute("class","btn submit");
    submit.setAttribute("onclick","closeForm('project-form')");
    submit.textContent = "Submit"
    form.appendChild(submit)

    let close = document.createElement("button");
    close.setAttribute("type","button");
    close.setAttribute("class","btn submit");
    close.setAttribute("onclick","closeForm('project-form')");
    close.textContent = "Close"
    form.appendChild(close)

}

function closeForm(id) {
    let form = document.getElementById(id);
    let projectContainer = document.getElementById("project-container");
    projectContainer.removeChild(form)
}

export {projectForm, closeForm}

