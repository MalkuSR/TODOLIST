document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteBtn')) {
            event.target.parentElement.remove();
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
