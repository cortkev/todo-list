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

function handleCreateProject() {
  const projectNameInput = document.querySelector('input[type="text"]');
  const projectName = projectNameInput.value.trim();

  if (projectName) {
    console.log('Creating project:', projectName);
    closeModal();

    
  }

  const newDiv = createListBox();
  showModal(newDiv);
}

export { createModalElement, showModal };