import { setDelBtn } from "./events";

function loadTodos(todoList) {
  for (let todo of todoList.allTodos) {
    console.log(todo.id);
    addTodoNode(todo);
    setDelBtn(todo);
  }
}

function addTodoNode(todo) {
  const mainDiv = document.querySelector(".grid-box");
  const todoNode = document.createElement("div");

  todoNode.classList.add("todo");
  todoNode.id = `todo${todo.id}`;
  todoNode.innerHTML = `
    <input type="checkbox" />
    <span class="text">${todo.text}</span>
    <span class="date">${todo.id}</span>
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>note-edit-outline</title>
        <path
            d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z"
        />
        </svg>
    </button>
    <button id="del-btn${todo.id}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>trash-can</title>
        <path
            d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
        />
        </svg>
    </button>
    `;
  mainDiv.appendChild(todoNode);
}

export { loadTodos };
