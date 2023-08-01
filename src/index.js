import _, { add } from 'lodash';
import { createModalElement, showModal } from './addList';
import './style.css';

const contentDiv = document.querySelector('.container');

function createProject() {
  // Get the container element where the button will be appended
  const headerDiv = document.querySelector('.header-div');

  // Create the button element
  const createProjectButton = document.createElement("button");
  createProjectButton.classList.add('button');
  createProjectButton.textContent = "Create Project";

  // Add an event listener to handle the button click
  createProjectButton.addEventListener("click", () => {
    const modal = createModalElement();
    showModal(modal);
  });

  // Append the button to the container element
  headerDiv.appendChild(createProjectButton);
}
// Call the function to add the create project button
createProject();