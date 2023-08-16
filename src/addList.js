import { create } from "lodash";
import {createTaskForm} from "./addTask";

//modal for the list creation
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


  // create project submit button
  const createProjectSubmitButton = document.createElement('button');
  createProjectSubmitButton.setAttribute('id', 'createProjectSubmitButton');
  createProjectSubmitButton.textContent = 'Create';

  closeSpan.addEventListener('click', closeModal);
  createProjectSubmitButton.addEventListener('click', createList);
  
  projectNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      createList();
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
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
  modal.remove();
}

function createList(){
  const listContainer = document.querySelector('.container');
  const projectNameInput = document.querySelector('input[type="text"]');
  let projectName = projectNameInput.value.trim();

  if(projectName){
    const listDiv = document.createElement("div");
    listDiv.classList.add("card");
    //List title
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = projectName;
    console.log(projectName);

    //card content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    //add task button
    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id', 'add-task-button');
    addTaskButton.textContent = 'Add Task';

    //click add task
    addTaskButton.addEventListener("click", function () {
      showModal(createTaskForm(listDiv));
    });

    listDiv.appendChild(cardTitle);
    listDiv.appendChild(cardContent);
    listDiv.appendChild(addTaskButton);

    listContainer.appendChild(listDiv);
  }
  closeModal();
}



export { createProjectModal, showModal };