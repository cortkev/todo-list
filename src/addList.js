import { create } from "lodash";
import {createTaskForm, updateTaskUI} from "./addTask";

const projects = [];
function Project(name){
  this.name = name;
  this.tasks = [];
}

//modal for the project creation
function createProjectModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('close');
  closeSpan.innerHTML = '&times;';

  const heading = document.createElement('h2');
  heading.textContent = 'Create New Project';

  const projectNameInput = document.createElement('input');
  projectNameInput.setAttribute('type', 'text');
  projectNameInput.setAttribute('placeholder', 'Project Name');
  projectNameInput.setAttribute('id', 'project-name-input');
  projectNameInput.classList.add('text-box')
  projectNameInput.classList.add('first-text-box');
  
  // create project submit button
  const createProjectSubmitButton = document.createElement('button');
  createProjectSubmitButton.setAttribute('class', 'create-project-submit-button');
  createProjectSubmitButton.textContent = 'Create';

  closeSpan.addEventListener('click', closeModal);
  createProjectSubmitButton.addEventListener('click', addProject);
  
  projectNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addProject();
    }
  });

  modalContent.appendChild(closeSpan);
  modalContent.appendChild(heading);
  modalContent.appendChild(projectNameInput);
  modalContent.appendChild(createProjectSubmitButton);
  modal.appendChild(modalContent);

  return modal;
}

function showModal(modal) {
  const body = document.querySelector('body');
  body.appendChild(modal);
  modal.style.display = 'block';
  //focus on the first text box
  const firstTextBox = document.querySelector('.first-text-box');
  firstTextBox.focus();
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
  modal.remove();
}

function addProject(){
  const projectNameInput = document.querySelector('input[type="text"]');
  const projectName = projectNameInput.value.trim();
  if(projectName){
  const newProject = new Project(projectName);
  projects.push(newProject);
  saveToLocalStorage();
  updateProjectUI();
  }
  closeModal();
}
  

function updateProjectUI(){
  //iterate through projects array and create a div for each project
  const projectsContainer = document.querySelector('.container');
  projectsContainer.innerHTML = '';
  projects.forEach(project => {
    //creates the projectDiv
    projectsContainer.appendChild(createProjectDiv(project)); 
    updateTaskUI(project);
    console.log(projects);
  });

}

function createProjectDiv(project){
  giveProjectId();
  //the project div
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("card");

  //project title
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = project.name;

  //project content where tasks will be shown
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  cardContent.setAttribute('data-project-id', project.id); 

  //add task button
  const addTaskButton = document.createElement('button');
  addTaskButton.setAttribute('class', 'add-task-button');
  addTaskButton.textContent = 'Add Task +';
  //click add task
  addTaskButton.addEventListener("click", function () {
    showModal(createTaskForm(project));
    
  });

  projectDiv.appendChild(cardTitle);
  projectDiv.appendChild(cardContent);
  projectDiv.appendChild(addTaskButton);

  return projectDiv;
}

function giveProjectId(){
  let i = 0;
    projects.map(project => {
      project['id'] = i;
      i++;
    })
    const index = projects.map(newProject => newProject.id);
}

function saveToLocalStorage(){
  localStorage.setItem('projects', JSON.stringify(projects));
}

function loadFromLocalStorage() {
  const savedProjects = JSON.parse(localStorage.getItem('projects'));
  if (savedProjects) {
    // Clear existing projects and load from local storage
    projects.length = 0; // This clears the array without creating a new reference
    projects.push(...savedProjects); // Push saved projects into the array
    updateProjectUI();
  }
}

export { projects, createProjectModal, showModal, closeModal, updateProjectUI, saveToLocalStorage, loadFromLocalStorage};