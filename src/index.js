import _, { add } from 'lodash';
// import printMe from './print.js';
import './style.css';

function createTextBox() {
  const textBox = document.createElement("input");
  textBox.type = "text";
  return textBox;
}

function createLabel(text) {
  const label = document.createElement("label");
  label.textContent = text;
  return label;
}

function createListBox() {
  const newDiv = document.createElement("div");
  newDiv.classList.add('list-box');


  const form = document.createElement("form");
  form.classList.add('list-form'); // Add a CSS class for centering the form

  const title = document.createElement("h1");
  title.classList.add('title');
  title.innerHTML = 'Add Task';
  form.appendChild(title);

  const labels = ["Title", "Description"];
  const inputNames = ["title", "description"];

  for (let i = 0; i < labels.length; i++) {
    const label = createLabel(labels[i]);
    const textBox = createTextBox();
    textBox.name = inputNames[i];

    form.appendChild(label);
    form.appendChild(textBox);
  }

    // Create due date input
    const dueDateLabel = createLabel("Due Date");
    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("due-date")
    dueDateInput.type = "date";
    dueDateInput.name = "dueDate";
  
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);

  // Create priority selector
  const priorityLabel = createLabel("Priority");
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("select");
  prioritySelect.name = "priority";

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

  newDiv.appendChild(form);

  return newDiv;
}

const contentDiv = document.querySelector('.container');
contentDiv.appendChild(createListBox());

