const todoList = [{
    name: '',
    dueDate: '01-01-2025'}];

renderTodoList();

function renderTodoList(){
        
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
        
          <div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
            " class="delete">Delete</button>
      `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('#js-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector(
        '#js-input-todo'
    );
    const name = inputElement.value;

    const dateInputElement = document.querySelector(
        '#js-input-date'
    );
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}

document.getElementById('click').onclick = 
function(){addTodo();};;