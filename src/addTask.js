import {closeModal, showModal, updateProjectUI, projects} from "./addList";
import Icon from './delete.svg';

function Task(formTitle, formDescription, dueDate, priority, isChecked){
  this.formTitle = formTitle;
  this.formDescription = formDescription;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isChecked = isChecked;
}
//function to create a modal that asks for task info
function createTaskForm(project) {
  const parentDiv = document.createElement("div");
  parentDiv.classList.add('modal');

  const newDiv = document.createElement("div");
  newDiv.classList.add('list-box');

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('close');
  closeSpan.setAttribute('id', 'task-close');
  closeSpan.innerHTML = '&times;';

  const form = document.createElement("form");
  form.classList.add('list-form');
  form.setAttribute('id', 'form');

  const title = document.createElement("h1");
  title.classList.add('title');
  title.innerHTML = 'Add task';
  form.appendChild(title);

  function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
  }
  
  function createTextBox() {
    const textBox = document.createElement("input");
    textBox.classList.add('text-box')
    textBox.type = "text";
    return textBox;
  }

  closeSpan.addEventListener('click', closeModal);
  
  // Create the label and text box for the title
  const titleLabel = createLabel("Title");
  titleLabel.setAttribute('class', 'label');
  
  const titleTextBox = createTextBox();
  titleTextBox.setAttribute('id', 'titleInput');
  titleTextBox.classList.add('first-text-box');
  titleTextBox.setAttribute('placeholder', 'Task Name');
  
  // Create the label and text box for the description
  const descriptionLabel = createLabel("Description");
  descriptionLabel.setAttribute('class', 'label');
  const descriptionTextBox = document.createElement('textarea');
  descriptionTextBox.setAttribute('id', 'description-input');
  descriptionTextBox.setAttribute('placeholder', 'Description');
  
  // Append the label and text box to a container element
  //const container = document.querySelector("#container");
  form.appendChild(titleLabel);
  form.appendChild(titleTextBox);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextBox);
  
  
  // Create due date input
  const dueDateLabel = createLabel("Due Date");
  dueDateLabel.setAttribute('class', 'label');
  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("due-date")
  dueDateInput.type = "date";
  dueDateInput.setAttribute('id', 'dueDateInput')
  
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  
  // Create priority selector
  const priorityLabel = createLabel("Priority");
  priorityLabel.setAttribute('class', 'label');
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("select");
  prioritySelect.setAttribute('id', 'prioritySelect')

  // Create option elements for different priorities
  const priorities = ["Low", "Medium", "High"];
  for (let i = 0; i < priorities.length; i++) {
    const option = document.createElement("option");
    option.value = priorities[i];
    option.textContent = priorities[i];
    prioritySelect.appendChild(option);
  }
  
  form.appendChild(priorityLabel);
  form.appendChild(prioritySelect);

  //submit button
  const submitButton = document.createElement("input");
  submitButton.classList.add('submit-button')
  submitButton.type = "submit";
  submitButton.value = "Submit";
  form.appendChild(submitButton);

  //add the task to the list with the given information
  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    addTask(project);
    form.reset();
    parentDiv.remove();
  });

  newDiv.appendChild(closeSpan);
  newDiv.appendChild(form);
  parentDiv.appendChild(newDiv);

  return parentDiv;
}

//add task div to project div
function addTask(project){
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("description-input");
  const dueDateInput = document.getElementById("dueDateInput");
  const prioritySelect = document.getElementById("prioritySelect");
  
  const formTitle = titleInput.value;
  const formDescription = descriptionInput.value;
  const dueDate = dueDateInput.value;
  const priority = prioritySelect.value;
  const isChecked = false;

  const taskName = titleInput.value.trim();
  if(taskName){
    const newTask = new Task(formTitle, formDescription, dueDate, priority, isChecked);
    project.tasks.push(newTask);
    updateTaskUI(project);
  }
}

function updateTaskUI(project){
  console.log("Project ID:", project.id);
  const cardContent = document.querySelector(`[data-project-id="${project.id}"]`);
  console.log("Project ID:", project.id);
  cardContent.innerHTML = '';
  project.tasks.forEach(task => {
    cardContent.appendChild(createTaskDiv(task, project));
  });
}

function createTaskDiv(task, project) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task-summary');

  // Wrap checkbox in its own div
  const checkboxDiv = document.createElement('div');
  checkboxDiv.classList.add('checkbox-div');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'checkbox');
  checkbox.checked = task.completed;
  checkboxDiv.appendChild(checkbox);

  // Wrap title element in its own div
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title-div');
  const titleElement = document.createElement('span');
  titleElement.textContent = task.formTitle;
  titleElement.setAttribute('id', 'title-text')
  titleDiv.appendChild(titleElement);

  // Wrap due date element in its own div
  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('due-date-div');
  const dueDateElement = document.createElement('span');
  dueDateElement.textContent = task.dueDate;
  dueDateElement.setAttribute('id', 'due-date-text')
  dueDateDiv.appendChild(dueDateElement);

  //create delete button
  const deleteButtonDiv = document.createElement('div');
  deleteButtonDiv.classList.add('delete-div');
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("delete-button");
  deleteButtonDiv.appendChild(myIcon);
  
  // Append wrapped elements to the task element
  taskElement.appendChild(checkboxDiv);
  taskElement.appendChild(titleDiv);
  taskElement.appendChild(dueDateDiv);
  taskElement.appendChild(deleteButtonDiv);

  //event listener to delete the task
  myIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    //call delete task function
    deleteTask(project, task);
  });

  checkbox.addEventListener('click', function(event) {
    event.stopPropagation(); //stop event from triggering taskElement
    if (checkbox.checked) {
      // Checkbox is now checked
      task.isChecked = true
      titleElement.classList.add('strikethrough');
      dueDateElement.classList.add('strikethrough');

      titleElement.classList.add('checked');
      dueDateElement.classList.add('checked');
    } else {
      // Checkbox is now unchecked
      task.isChecked = false;
      titleElement.classList.remove('strikethrough');
      dueDateElement.classList.remove('strikethrough');
      titleElement.classList.remove('checked');
      dueDateElement.classList.remove('checked');
    }
  });

  taskElement.addEventListener('click', function() {
    showModal(editTaskForm(task));
    //console.log('taskElement', task);
  });

  return taskElement;
}

// NEED TO MAKE SUBMIT BUTTON EDIT THE TASK
function editTask(task){
  const titleInput = document.querySelector('.edit-title-textbox');
  const descriptionInput = document.querySelector('.edit-description-textbox')
  const priorityInput = document.querySelector('.edit-priority');
  const dueDateInput = document.querySelector('.edit-duedate');
  
  task.formTitle = titleInput.value;
  task.formDescription = descriptionInput.value;
  task.priority = priorityInput.value;
  task.dueDate = dueDateInput.value;
  updateProjectUI();
  console.log('after');
}

function editTaskForm(task) {
  console.log('editTaskForm', task);
  const parentDiv = document.createElement("div");
  parentDiv.classList.add('modal');

  const newDiv = document.createElement("div");
  newDiv.classList.add('list-box');

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('close');
  closeSpan.setAttribute('id', 'task-close');
  closeSpan.innerHTML = '&times;';


  function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
  }
  function createTextBox() {
    const textBox = document.createElement("input");
    textBox.type = "text";
    return textBox;
  }
  const form = document.createElement("form");
  form.classList.add('list-form');
  form.setAttribute('id', 'form');

  const title = document.createElement("h1");
  title.classList.add('title');
  title.innerHTML = 'Edit task';
  form.appendChild(title);

  function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
  }
  
  function createTextBox() {
    const textBox = document.createElement("input");
    textBox.classList.add('text-box')
    textBox.type = "text";
    return textBox;
  }

  closeSpan.addEventListener('click', closeModal);
  
  // Create the label and text box for the title
  const titleLabel = createLabel("Title");
  titleLabel.setAttribute('class', 'label');
  
  const editTitleTextBox = createTextBox();
  editTitleTextBox.setAttribute('id', 'titleInput');
   editTitleTextBox.classList.add('first-text-box');
   editTitleTextBox.classList.add('edit-title-textbox');
  editTitleTextBox.value = task.formTitle
  
  // Create the label and text box for the description
  const descriptionLabel = createLabel("Description");
  descriptionLabel.setAttribute('class', 'label');
  const editDescriptionTextBox = document.createElement('textarea');
  editDescriptionTextBox.setAttribute('id', 'description-input');
  editDescriptionTextBox.classList.add('edit-description-textbox');
  editDescriptionTextBox.value = task.formDescription;
  
  // Append the label and text box to a container element
  //const container = document.querySelector("#container");
  form.appendChild(titleLabel);
  form.appendChild(editTitleTextBox);
  form.appendChild(descriptionLabel);
  form.appendChild(editDescriptionTextBox);
  
  
  // Create due date input
  const dueDateLabel = createLabel("Due Date");
  dueDateLabel.setAttribute('class', 'label');
  const editDueDateInput = document.createElement("input");
  editDueDateInput.classList.add("due-date")
  editDueDateInput.type = "date";
  editDueDateInput.setAttribute('id', 'dueDateInput');
  editDueDateInput.classList.add('edit-duedate');
  editDueDateInput.value = task.dueDate;
  
  form.appendChild(dueDateLabel);
  form.appendChild(editDueDateInput);
  
  // Create priority selector
  const priorityLabel = createLabel("Priority");
  priorityLabel.setAttribute('class', 'label');
  const editPrioritySelect = document.createElement("select");
  editPrioritySelect.classList.add("select");
  editPrioritySelect.setAttribute('id', 'prioritySelect');
  editPrioritySelect.classList.add('edit-priority');
  

  // Create option elements for different priorities
  const priorities = ["Low", "Medium", "High"];
  for (let i = 0; i < priorities.length; i++) {
    const option = document.createElement("option");
    option.value = priorities[i];
    option.textContent = priorities[i];
    editPrioritySelect.appendChild(option);
  }

  editPrioritySelect.value = task.priority;
  
  form.appendChild(priorityLabel);
  form.appendChild(editPrioritySelect);

  //submit button
  const editButton = document.createElement("input");
  editButton.classList.add('submit-button')
  editButton.type = "submit";
  editButton.value = "Save";
  form.appendChild(editButton);

  //add the task to the list with the given information
  editButton.addEventListener("click", (event) => {
    event.preventDefault()
    editTask(task);
    form.reset();
    parentDiv.remove();
  });

  newDiv.appendChild(closeSpan);
  newDiv.appendChild(form);
  parentDiv.appendChild(newDiv);

  return parentDiv;
}

//create a function that will delete a task when the delete button is clicked
function deleteTask(project, taskToDelete) {
  const index = project.tasks.findIndex(task => task === taskToDelete);
  if (index !== -1) {
    project.tasks.splice(index, 1); // Remove the task from the array
    updateTaskUI(project);
  }
}


export { createTaskForm, updateTaskUI};