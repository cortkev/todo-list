(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["addTask"],{

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ (() => {

function createListBox() {
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
    form.classList.add('list-form'); // Add a CSS class for centering the form
  
    const title = document.createElement("h1");
    title.classList.add('title');
    title.innerHTML = 'Add task';
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/addTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUxpc3RCb3goKSB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnbGlzdC1ib3gnKTtcbiAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0Qm94KCkge1xuICAgICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRleHRCb3gudHlwZSA9IFwidGV4dFwiO1xuICAgICAgcmV0dXJuIHRleHRCb3g7XG4gICAgfVxuICBcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTsgLy8gQWRkIGEgQ1NTIGNsYXNzIGZvciBjZW50ZXJpbmcgdGhlIGZvcm1cbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnQWRkIHRhc2snO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcbiAgICBjb25zdCBsYWJlbHMgPSBbXCJUaXRsZVwiLCBcIkRlc2NyaXB0aW9uXCJdO1xuICAgIGNvbnN0IGlucHV0TmFtZXMgPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdO1xuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChsYWJlbHNbaV0pO1xuICAgICAgY29uc3QgdGV4dEJveCA9IGNyZWF0ZVRleHRCb3goKTtcbiAgICAgIHRleHRCb3gubmFtZSA9IGlucHV0TmFtZXNbaV07XG4gIFxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRCb3gpO1xuICAgIH1cbiAgXG4gICAgICAvLyBDcmVhdGUgZHVlIGRhdGUgaW5wdXRcbiAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKFwiRHVlIERhdGVcIik7XG4gICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpXG4gICAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgXG4gICAgLy8gQ3JlYXRlIHByaW9yaXR5IHNlbGVjdG9yXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUxhYmVsKFwiUHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgXG4gICAgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50cyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXNcbiAgICBjb25zdCBwcmlvcml0aWVzID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0aWVzW2ldO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdGllc1tpXTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBcbiAgICAvL3N1Ym1pdCBidXR0b25cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKVxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIlN1Ym1pdFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBcbiAgICByZXR1cm4gbmV3RGl2O1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9