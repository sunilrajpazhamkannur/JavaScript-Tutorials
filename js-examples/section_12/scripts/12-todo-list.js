let todoList = JSON.parse(localStorage.getItem('todoList'));
if (todoList.length === 0) {
    todoList = [
        {
            name:'wash dishes',
            dueDate: '2025-10-20'
        }, {
            name: 'watch youtube',
            dueDate: '2025-10-23'
        }
    ];
}

function renderTodoList() {
    let todoHTML = '';
    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoHTML += html;
    })

    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoHTML;
    document.querySelectorAll('.delete-todo-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
            localStorage.setItem('todoList', JSON.stringify(todoList));
        })
    })
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})

renderTodoList();