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
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name} = todoObject;
        const {dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                localStorage.setItem('todoList', JSON.stringify(todoList));
            ">Delete</button>
        `;
        todoHTML += html;
    }

    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoHTML;
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

renderTodoList();