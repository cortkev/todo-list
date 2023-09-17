import { createProjectModal, showModal } from './dom.js';
import { loadFromLocalStorage } from './app.js';
import './style.css';

window.onload = function () {
  loadFromLocalStorage();
}

function createProjectContainer() {
  // Get the container element where the button will be appended
  const headerDiv = document.querySelector('.header-div');

  // Create the button element
  const createProjectButton = document.createElement("button");
  createProjectButton.classList.add('create-project-button');
  createProjectButton.textContent = "Create Project +";

  // Add an event listener to handle the button click
  createProjectButton.addEventListener("click", () => {
    const modal = createProjectModal();
    showModal(modal);
  });

  // Append the button to the container element
  headerDiv.appendChild(createProjectButton);
}
// Call the function to add the create project button
createProjectContainer();