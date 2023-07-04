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



// function TodoItem(title, description, dueDate, priority) {
//   this.title = title;
//   this.description = description;
//   this.dueDate = dueDate;
//   this.priority = priority;
// }



//title, description, dueDate, priority

// function createListBox() {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add('list-box');

//   function createLabel(text) {
//     const label = document.createElement("label");
//     label.textContent = text;
//     return label;
//   }

//   function createTextBox() {
//     const textBox = document.createElement("input");
//     textBox.type = "text";
//     return textBox;
//   }

//   const form = document.createElement("form");
//   form.classList.add('list-form'); // Add a CSS class for centering the form

//   const title = document.createElement("h1");
//   title.classList.add('title');
//   title.innerHTML = 'Add task';
//   form.appendChild(title);

//   const labels = ["Title", "Description"];
//   const inputNames = ["title", "description"];

//   for (let i = 0; i < labels.length; i++) {
//     const label = createLabel(labels[i]);
//     const textBox = createTextBox();
//     textBox.name = inputNames[i];

//     form.appendChild(label);
//     form.appendChild(textBox);
//   }

//     // Create due date input
//     const dueDateLabel = createLabel("Due Date");
//     const dueDateInput = document.createElement("input");
//     dueDateInput.classList.add("due-date")
//     dueDateInput.type = "date";
//     dueDateInput.name = "dueDate";
  
//     form.appendChild(dueDateLabel);
//     form.appendChild(dueDateInput);

//   // Create priority selector
//   const priorityLabel = createLabel("Priority");
//   const prioritySelect = document.createElement("select");
//   prioritySelect.classList.add("select");
//   prioritySelect.name = "priority";

//   // Create option elements for different priorities
//   const priorities = ["Low", "Medium", "High"];
//   for (let i = 0; i < priorities.length; i++) {
//     const option = document.createElement("option");
//     option.value = priorities[i];
//     option.textContent = priorities[i];
//     prioritySelect.appendChild(option);
//   }

//   form.appendChild(priorityLabel);
//   form.appendChild(prioritySelect);

//   //submit button
//   const submitButton = document.createElement("input");
//   submitButton.classList.add('submit-button')
//   submitButton.type = "submit";
//   submitButton.value = "Submit";
//   form.appendChild(submitButton);

//   newDiv.appendChild(form);

//   return newDiv;
// }

// const contentDiv = document.querySelector('.container');
// contentDiv.appendChild(createListBox());