import createListBox from "./addTask";

function createModalElement() {
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
  createProjectSubmitButton.addEventListener('click', handleCreateProject);
  
  projectNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission via Enter key
      handleCreateProject();
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

//keep track of projects in an array
const projects = [];

function handleCreateProject() {
  const projectNameInput = document.querySelector('input[type="text"]');
  const projectName = projectNameInput.value.trim();

  if (projectName) {
    console.log('Creating project:', projectName);
    projects.push(projectName);
    createListCard(projectName);
    closeModal();
    console.log(projects);
  }

  const newDiv = createListBox();
  showModal(newDiv);
}

//create a card for the list
function createListCard(projectName){
  const contentDiv = document.querySelector('.container');
  const card = document.createElement("div");
  card.classList.add("card");
  

  // Create the card title (list name)
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = projectName;
  card.appendChild(cardTitle);
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  cardContent.setAttribute('id', 'list-container');

  card.appendChild(cardContent);
  const addTaskButton = document.createElement('button');
  addTaskButton.setAttribute('id', 'add-task-button');
  addTaskButton.textContent = 'Add Task';
  card.appendChild(addTaskButton);

  contentDiv.appendChild(card);
}

export { createModalElement, showModal };