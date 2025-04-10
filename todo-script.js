document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task item to the list
    function addTask(taskText) {
        if (taskText === '') return; // Don't add empty tasks

        // 1. Create the list item element
        const listItem = document.createElement('li');

        // 2. Create the span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            // Toggle 'completed' class on the list item when span is clicked
            listItem.classList.toggle('completed');
        });

        // 3. Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Add class for styling
        removeButton.addEventListener('click', () => {
            // Remove the parent list item when remove button is clicked
            taskList.removeChild(listItem);
            // Or: listItem.remove(); // More modern alternative
        });

        // 4. Append the span and button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        // 5. Append the list item to the task list (ul)
        taskList.appendChild(listItem);

        // 6. Clear the input field
        taskInput.value = '';

        // 7. Set focus back to the input field
        taskInput.focus();
    }

    // --- Event Listeners ---

    // Add task when the button is clicked
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            // Optionally prevent default if the input is inside a form
            // event.preventDefault();
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

     // --- Add event listeners to initially existing remove buttons ---
     // This makes the example remove button functional from the start
     taskList.querySelectorAll('.remove-btn').forEach(button => {
         button.addEventListener('click', () => {
             button.parentElement.remove();
         });
     });
      // Add toggle completed functionality to initial example task span
      const initialSpan = taskList.querySelector('li span');
      if (initialSpan) {
         initialSpan.addEventListener('click', () => {
            initialSpan.parentElement.classList.toggle('completed');
         });
      }


});