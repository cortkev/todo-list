export default function createListBox() {
  const parentDiv = document.createElement("div");
  parentDiv.classList.add('modal');

  const newDiv = document.createElement("div");
  newDiv.classList.add('list-box');
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
    textBox.type = "text";
    return textBox;
  }
  
  // Create the label and text box for the title
  const titleLabel = createLabel("Title");
  const titleTextBox = createTextBox();
  titleTextBox.setAttribute('id', 'title-text');
  
  // Create the label and text box for the description
  const descriptionLabel = createLabel("Description");
  const descriptionTextBox = createTextBox();
  descriptionTextBox.setAttribute('id', 'description-text');
  
  // Append the label and text box to a container element
  //const container = document.querySelector("#container");
  form.appendChild(titleLabel);
  form.appendChild(titleTextBox);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextBox);
  
  
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

  submitButton.addEventListener("click", () => {
    const formTitle = titleTextBox.value;
    const formDescription = descriptionTextBox.value;
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;

    console.log("Title:", formTitle);
    console.log("Description:", formDescription);
    console.log("Due Date:", dueDate);
    console.log("Priority:", priority);

    parentDiv.remove();
  });

  newDiv.appendChild(form);
  parentDiv.appendChild(newDiv);

  return parentDiv;
}

function task(formTitle, formDescription, dueDate, priority){
  this.formTitle = formTitle;
  this.formDescription = formDescription;
  this.dueDate = dueDate;
  this.priority = priority;
}

let taskListArray = [];
