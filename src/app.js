import { createProjectDiv, createTaskDiv, closeModal } from "./dom.js";
//Function related to createing and managing projects

const projects = [];
function Project(name) {
  this.name = name;
  this.tasks = [];
}

function addProject() {
  const projectNameInput = document.querySelector('input[type="text"]');
  const projectName = projectNameInput.value.trim();
  if (projectName) {
    const newProject = new Project(projectName);
    projects.push(newProject);
    saveToLocalStorage();
    updateProjectUI();
  }
  closeModal();
}

function updateProjectUI() {
  //iterate through projects array and create a div for each project
  const projectsContainer = document.querySelector(".container");
  projectsContainer.innerHTML = "";
  projects.forEach((project) => {
    //creates the projectDiv
    projectsContainer.appendChild(createProjectDiv(project));
    updateTaskUI(project);
    console.log(projects);
  });
}

function giveProjectId() {
  let i = 0;
  projects.map((project) => {
    project["id"] = i;
    i++;
  });
  const index = projects.map((newProject) => newProject.id);
}

function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadFromLocalStorage() {
  const savedProjects = JSON.parse(localStorage.getItem("projects"));
  if (savedProjects) {
    // Clear existing projects and load from local storage
    projects.length = 0; // This clears the array without creating a new reference
    projects.push(...savedProjects); // Push saved projects into the array
    updateProjectUI();
  }
}

//Function related to creating and managing tasks

//add task div to project div
function Task(formTitle, formDescription, dueDate, priority, isChecked) {
    this.formTitle = formTitle;
    this.formDescription = formDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isChecked = isChecked;
  }

function addTask(project) {
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
  if (taskName) {
    const newTask = new Task(
      formTitle,
      formDescription,
      dueDate,
      priority,
      isChecked
    );
    project.tasks.push(newTask);
    saveToLocalStorage();
    updateTaskUI(project);
  }
}

function updateTaskUI(project) {
  console.log("Project ID:", project.id);
  const cardContent = document.querySelector(
    `[data-project-id="${project.id}"]`
  );
  console.log("Project ID:", project.id);
  cardContent.innerHTML = "";
  project.tasks.forEach((task) => {
    cardContent.appendChild(createTaskDiv(task, project));
  });
}

function editTask(task) {
  const titleInput = document.querySelector(".edit-title-textbox");
  const descriptionInput = document.querySelector(".edit-description-textbox");
  const priorityInput = document.querySelector(".edit-priority");
  const dueDateInput = document.querySelector(".edit-duedate");

  task.formTitle = titleInput.value;
  task.formDescription = descriptionInput.value;
  task.priority = priorityInput.value;
  task.dueDate = dueDateInput.value;
  saveToLocalStorage();
  updateProjectUI();
  console.log("after");
}

//create a function that will delete a task when the delete button is clicked
function deleteTask(project, taskToDelete) {
  const index = project.tasks.findIndex((task) => task === taskToDelete);
  if (index !== -1) {
    project.tasks.splice(index, 1); // Remove the task from the array
    saveToLocalStorage();
    updateTaskUI(project);
  }
}

export {
  projects,
  updateProjectUI,
  addProject,
  addTask,
  giveProjectId,
  updateTaskUI,
  editTask,
  deleteTask,
  saveToLocalStorage,
  loadFromLocalStorage,
};
